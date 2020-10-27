/**
 *- Configuration for the scheduler
 */
import { Scheduler,DateHelper,StringHelper } from 'bryntum-schedulerpro';

export default {

    minHeight        : '20em',
    startDate        : new Date(2017, 0, 1, 7),
    endDate          : new Date(2017, 0, 1, 19),
    viewPreset       : 'hourAndDay',
    barMargin        : 5,
    rowHeight        : 50,
    multiEventSelect : true,

    features : {
        cellEdit  : false,
        eventDrag : {
            constrainDragToResource : true
        },
        dependencies: true,
        dependencyEdit: true,
        eventEdit : {
            items : {
                nameField : false,

                resourceField : false,

                eventStyle : {
                    type     : 'combo',
                    label    : 'Style',
                    name     : 'eventStyle',
                    editable : false,
                    weight   : 110,
                    items    : Scheduler.eventStyles
                },
                eventColor : {
                    type     : 'combo',
                    label    : 'Color',
                    name     : 'eventColor',
                    editable : false,
                    weight   : 120,
                    listItemTpl : item => `<div class="color-box b-sch-${item.value}"></div><div>${item.value}</div>`,
                    items    : Scheduler.eventColors
                },
                num : {
                    type  : 'textField',
                    label : '数量',
                    name  : 'num'
                }
            }
        },
        summary : {
            renderer : ({ startDate, events }) => {
                // console.log(events)
                // console.log("summary")
                let date = DateHelper.format(startDate,'YYYY-MM-DD HH:mm')
                // console.log("date:",date)
                let sum = 0;
                if (events.length>0){
                    for (let i in events){
                        // console.log(events[i].data.object)
                        if (events[i].data.object[date])
                           sum += events[i].data.object[date];
                        // sum += Number(events[i].data.num)
                    }
                }
                return sum;
            }
        },
        nonWorkingTime : false
        // taskEdit:{
            // items:{
                // generalTab: {
                    // Rename "General" tab
                    // title : 'Main',
                    // items : {
                    //     // Rename "% Complete" field
                    //     percentDoneField : {
                    //         label : 'Status'
                    //     }
                    // }
                // }
            // }
        // }
    },

    columns : [
        {
            text       : 'Name',
            field      : 'name',
            htmlEncode : false,
            width      : 150,
            renderer   : ({ record }) => `<div class="color-box b-sch-${record.name.toLowerCase()}"></div>${record.name}`
        }
    ],

    crudManager : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'data/data.json'
            }
        }
    },

    eventRenderer({ eventRecord, resourceRecord, renderData }) {
        // console.log("eventRender")
        // console.log("eventRecord:",eventRecord);
        // console.log("resourceRecord:",resourceRecord);
        // console.log("renderData:",renderData);
        // let result = "";
        // if (!DateHelper.isEqual(eventRecord.startDate,eventRecord.originalData.startDate)){
        // if (DateHelper.format(eventRecord.startDate,"YYYY-MM-DD HH:mm")!=DateHelper.format(eventRecord.originalData.startDate,"YYYY-MM-DD HH:mm")){
        //     let diff = DateHelper.diff(eventRecord.startDate,eventRecord.endDate,"hour");
        //     let temp = eventRecord.object;
        //     eventRecord.object = {};
        //     let date = eventRecord.startDate;
        //     let originalDate = eventRecord.originalData.startDate;
        //     for (let i=0;i<diff;i++){
        //         date = DateHelper.add(date,i,"hour");
        //         originalDate = DateHelper.add(originalDate,i,"hour");
        //         eventRecord.object[DateHelper.format(date,"YYYY-MM-DD HH:mm")] = temp[DateHelper.format(originalDate,"YYYY-MM-DD HH:mm")];
        //         // event.object[DateHelper.format(date,"YYYY-MM-DD HH:mm")] = "asdfasd";
        //     }
        //     eventRecord.originalData = eventRecord.data;
        // }
        let html = '';
        for (let i in eventRecord.object){
            // result += eventRecord.object[i].toString() + " ";
            html += `<span style="display:inline-block;width:${renderData.width/Object.keys(eventRecord.object).length}px;font-size:16px;padding-left:25px">${eventRecord.object[i]}</span>`
        }
        // tplData.style = 'color:black'; 
        return html;
    },

    listeners:{
        beforeEventDropFinalize({context}){
            let event = context.eventRecords[0];
            // console.log("beforeEventDropFinalize:",context);
            let diff = DateHelper.diff(event.startDate,event.endDate,"hour");
            let temp = event.object;
            event.object = {};
            let date = context.startDate;
            let originalDate = event.originalData.startDate;
            for (let i=0;i<diff;i++){
                let tempData1 = DateHelper.add(date,i,"hour");
                let tempDate2 = DateHelper.add(originalDate,i,"hour");
                event.object[DateHelper.format(tempData1,"YYYY-MM-DD HH:mm")] = temp[DateHelper.format(tempDate2,"YYYY-MM-DD HH:mm")];
            }
            event.originalData = event.data;
            console.log("new event:",event)
        }
    }


} // eo schedulerConfig

// eof

<!--
 * Styles Combo component
 -->
<template>
    <div></div>
</template>

    <script>
        import { Scheduler, WidgetHelper } from 'bryntum-schedulerpro';
        import { mapActions } from 'vuex';

        // export the combo
        export default {
            name: 'styles-combo',

            methods: {
                ...mapActions(['setEventStyle'])
            },

            mounted() {
                const
                    me = this,
                    combo = WidgetHelper.createWidget({
                        type        : 'combo',
                        appendTo    : this.$el,
                        items       : ['mixed'].concat(Scheduler.eventStyles),
                        value       : 'mixed',
                        label       : 'Style',
                        listCls     : 'style-list',
                        editable    : false,
                        listItemTpl : item => `<div class="b-sch-event-wrap b-sch-style-${item.value} b-sch-color-red"><div class="b-sch-event">${item.value}</div></div>`,
                        onChange    : ({value}) => {
                            me.setEventStyle(value);
                        }
                    })
                ;

                this.combo = combo;

                me.$store.subscribe(mutation => {
                    if('setEventStyle' === mutation.type) {
                        combo.value = mutation.payload;
                    }
                });

            }, // eo function mounted

            beforeDestroy() {
                if(this.combo) {
                    this.combo.destroy();
                }
            } // eo function beforeDestroy

        } // eo export default

    </script>

    <!-- eof -->

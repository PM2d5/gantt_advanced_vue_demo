<!--
 * Colors combo Component
 -->
<template>
    <div></div>
</template>

<script>
    import { Scheduler, WidgetHelper } from 'bryntum-schedulerpro';
    import { mapActions } from 'vuex';

    // export the combo
    export default {
        name: 'colors-combo',

        methods: {
            ...mapActions(['setEventColor'])
        },

        mounted() {

            const
                me = this,
                combo = WidgetHelper.createWidget({
                    type        : 'combo',
                    appendTo    : this.$el,
                    items       : ['mixed'].concat(Scheduler.eventColors),
                    value       : 'mixed',
                    label       : 'Color',
                    editable    : false,
                    listItemTpl : item => `<div class="color-box b-sch-${item.value}"></div><div>${item.value}</div>`,
                    onChange    : ({value}) => {
                        me.setEventColor(value);
                    }
                })
            ;

            this.combo = combo;

            me.$store.subscribe(mutation => {
                if('setEventColor' === mutation.type) {
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

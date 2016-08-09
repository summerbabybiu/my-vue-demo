/**
 * Created by rileyxia on 16/8/8.
 */
var SelectComponent = Vue.extend({
    props: ['select_items','selected','sa'],
    template : '<div v-bind:style="coverStyle">' +
                    '<span v-show="sa" v-bind:style="spanStyle">{{fill_info}}<span v-bind:style="poniter"></span></span>' +
                    '<select v-model="selected" v-bind:style="base_select">' +
                        '<option v-for="item in select_items" name="{{item}}" value="{{$key}}"> {{item}} </option> ' +
                    '</select>' +
                '</div>',
    data : function () {
        return {
            base_select: {
                position: 'absolute',
                'font-size': '20px',
                background: 'transparent',
                'padding-left': '10px',
                width: '250px',
                height: '100%',
                top: '0',
                left: '50%',
                'margin-left': '-125px',
                opacity : '0'
            },
            coverStyle: {
                margin : '20px 0',
                position: 'relative',
                height: '40px'
            },
            spanStyle: {
                'color': '#fff',
                background: 'orange',
                'border-radius': '5px',
                position: 'relative',
                display: 'inline-block',
                'font-size': '20px',
                width: '250px',
                height: '100%',
                'line-height': '40px',
            },
            poniter : {
                position: 'absolute',
                right : '10px',
                top : '13px',
                width : '0',
                height: '0',
                'border-top': '14px solid #eee',
                'border-left': '10px solid transparent',
                'border-right': '10px solid transparent',

            }
        }
    },
    computed: {
        fill_info : function () {
            if(this.select_items!= undefined &&this.select_items[this.selected] != undefined) {
                return this.select_items[this.selected]
            } else {
                return null
            }
        }
    }
});

Vue.component('select-component',SelectComponent);
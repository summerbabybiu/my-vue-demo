/**
 * Created by rileyxia on 16/8/10.
 */
var AddDataComponent = Vue.extend({
    props: ['index','total'],
    template: '<div v-bind:style="cover" v-if="justify"><span v-bind:style="countStyle">{{index}}</span><span v-bind:style="closeStyle" v-on:click="close">X</span>' +
        '<label>链接:</label><input type="url"><br>' +
        '<label>图片:</label><input type="url"><br>' +
        '<label>描述:</label><input type="text">' +
    '</div>',
    data: function () {
        return {
            cover: {
                border: '1px solid #ccc',
                position: 'relative',
                margin: '20px 0'
            },
            countStyle: {
                position: 'absolute',
                left: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '20px',
                'background-color': '#ccc',

            },
            closeStyle: {
                position: 'absolute',
                right: '0',
                top: '0',
                width: '20px',
                'background-color': '#ccc',
            },
            justify : true,
        }
    },

    method: {
        close: function () {
            this.justify = false;
            return false;
        }

    }
});
Vue.component('add-data-component',AddDataComponent);
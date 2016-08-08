/**
 * Created by rileyxia on 16/8/8.
 */
var SelectComponent = Vue.extend({
    props: ['select_items','selected','select_name'],
    template : '<select v-model="selected">' +
                    '<option v-for="item in select_items" name="{{item}}" value="{{$key}}"> {{item}} </option> ' +
                '</select>',
});

Vue.component('select-component',SelectComponent);
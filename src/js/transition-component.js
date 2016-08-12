/**
 * Created by stephenw on 16/8/12.
 */
var transitionComponent = Vue.extend({
    props: ['images'],
    template: '<div :style="container"><ul :style="ulStyle"><li v-for="item in images" :style="liStyle" track-by="$index"><img :src="item" :style="imageStyle"></li></ul></div>',
    data: function () {
        return {
            current: 0,
            container: {
                width: '400px',
                height: '300px',
                'overflow': 'hidden'
            },
            liStyle: {
                width: '400px',
                height: '300px',
                display: 'inline-block'
            },
            imageStyle: {
                width: '400px',
                height: '300px',
            },
            autoFlag: null
        }
    },
    computed: {
        ulStyle: function () {
            return {
                margin: '0',
                padding: '0',
                position: 'relative',
                width: this.images.length * 400 +'px',
                height: '300px',
                left: - (400*this.current) + 'px'
            }
        },
        count: function () {
            return this.images.length;
        }
    },
    methods: {
        turn: function (i) {
            var _i = this.current + i;
            if (_i < 0) {
                (_i = _i + this.count)
            }
            if (_i >= this.count) {
                _i = _i - this.count
            }
            this.current = _i
        },
        play: function () {
            var t = this.turn;
            this.autoFlag = setInterval(function () {
                t(1);
            }, 2000);
        }
    }
});

Vue.component('transition-component',transitionComponent);
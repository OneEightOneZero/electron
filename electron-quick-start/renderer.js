// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// import Vue from 'vue';
let Vue = require('vue/dist/vue.js');
let fs = require('fs');

let {
    Toast,
    Header,
    Swipe,
    SwipeItem
} = require('mint-ui');
let Aplayer = require('vue-aplayer');
Vue.component('aplayer', Aplayer)
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Cell.name, Cell);
// Vue.component(Checklist.name, Checklist);

new Vue({
    el: "#demo",
    data: {
        name: "Lemon"
    },
    template: `
        <div>
            <mt-header fixed title="fixed top"></mt-header>
            <mt-swipe :auto="4000" style="height: 500px">
            <mt-swipe-item><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3633976638,143512992&fm=200&gp=0.jpg" /></mt-swipe-item>
            <mt-swipe-item><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3633976638,143512992&fm=200&gp=0.jpg" /></mt-swipe-item>
            <mt-swipe-item><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3633976638,143512992&fm=200&gp=0.jpg" /></mt-swipe-item>
            </mt-swipe>
            <button @click="test">ok</button>
            <aplayer autoplay
                :music="{
                    title: '丑八怪',
                    artist: '薛之谦',
                    src: 'http://fs.w.kugou.com/201902261023/c3441af4a4cbf4b633a8d4f78ae1082e/G086/M05/05/19/NpQEAFh6BluACoOMADywAmNQSFs997.mp3',
                    pic: 'http://imge.kugou.com/stdmusic/20150715/20150715184807521489.jpg'
                }"
            />
        </div>
    `,
    methods: {
        test: function () {
            console.log(fs)
            fs.readFile('/Users/eno/Documents/Wscats/1000phone/1810/electron/tutorial/day1.md',function(err,data){
                console.log(data.toString())
            })
            // Toast({
            //     message: 'Upload Complete',
            //     position: 'bottom',
            //     duration: 5000
            // });
        }
    },
})
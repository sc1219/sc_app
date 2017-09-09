// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象
import App from './App.vue';

import "./statics/css/base.css";
import "./statics/mui/css/mui.min.css";


import vueRouter from "vue-router";
Vue.use(vueRouter);

import 'mint-ui/lib/style.min.css';
import mintui from "mint-ui";
Vue.use(mintui);

import 'expose?$!expose?jQuery!jquery'

import "muse-ui/dist/muse-ui.css";
import museui from "muse-ui";
Vue.use(museui);

import home from "./components/home.vue";
import movie from "./components/movie.vue";
import news from "./components/news.vue";
import newsinfo from "./components/newsinfo.vue";
import movieinfo from "./components/movieinfo.vue";
import img from "./components/img.vue";
import music from "./components/music.vue";
import musicinfo from "./components/musicinfo.vue";

import vueResource from "vue-resource";
Vue.use(vueResource);



var router = new vueRouter({
	routes:[
		{path: "/",redirect: "/home"},
		{path: "/home",component: home},
		{path: "/movie",component: movie},
		{path: "/home/news",component: news},
		{path: "/home/news/newsinfo/:id",component: newsinfo},
		{path: "/home/img",component: img},
		{path: "/movie/movieinfo/:id",component: movieinfo},
		{path: "/music",component:music},
		{path: "/music/musicinfo/:id",component: musicinfo}
	]
}
)

// 3.0 利用Vue对象进行解析渲染
new Vue({
	el:'#app',
	router: router,
	// render:function(create){create(App)} //es5的写法
	render:c=>c(App)  // es6的函数写法 =>：goes to
});
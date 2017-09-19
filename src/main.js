// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象
import App from './App.vue';

import "../static/css/base.css";
import "../static/mui/css/mui.css";


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
import weather from "./components/weather.vue";
import map from "./components/map.vue";

import vueResource from "vue-resource";
Vue.use(vueResource);

import AMap from 'vue-amap';
Vue.use(AMap);
AMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});


import moment from 'moment';
Vue.filter('datefmt', function (input, fmtstring) {
	//	使用momentjs这个日期格式化类库实现日的格式化功能
	return moment(input).format(fmtstring);
});

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
		{path: "/music/musicinfo/:id",component: musicinfo},
		{path: "/home/weather",component: weather},
		{path: "/home/map",component: map}
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
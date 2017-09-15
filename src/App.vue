<!-- 以后项目的根组件 -->
<template>
	<div id="tmpl">
		<mt-header title="S C">
			<a href="javascript:void(0)"  slot="left" >
				<mt-button @click="backto" v-if="isshow" icon="back">返回</mt-button>
			</a>
		</mt-header>
		<router-view></router-view>
		<nav class="mui-bar mui-bar-tab">
			<router-link @click="changecolor" class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/movie">
				<span class="mui-icon mui-icon-videocam"></span>
				<span class="mui-tab-label">电影</span>
			</router-link>
			<router-link class="mui-tab-item" to="/music">
				<span class="mui-icon mui-icon-mic"></span>
				<span class="mui-tab-label">音乐</span>
			</router-link>
			
		</nav>
	</div>
</template>

<script>
// 负责导出 .vue这个组件对象(它本质上是一个Vue对象,所以Vue中该定义的元素都可以使用

export default {  // es6的导出对象的写法
	data() {  //等价于 es5的 data:function(){
		return {
			isshow : false
		}
	},watch:{
			'$route':function(newroute,oldroute){
				if(newroute.path.toLowerCase() == '/home'){
					this.isshow = false;
				}else{
					this.isshow = true;
				}
			}
	},
	methods: {
		backto(){
//				利用路由对象中的go(-1)来实现返回到上一级页面(这个方法是vue-router的方法)
				this.$router.go(-1);
			},
		changecolor(){
			var nav = document.querySelector("nav");
			var a = nav.getElementsByTagName("a");
			for(var i = 0;i < a.length; i++){
				a.onclick = function(){
					this.style.color = "#fff";
				}
			}
		}	
	},
	created() {

	}
	
}
</script>

<style scoped>
/*当前页面的css样式写到这里，其中scoped表示这个里面写的css代码只是在当前组件页面上有效，不会去影响到其他组件页面*/

.mint-header {
	background-color: #000;
	position: fixed;
	top: 0;
	width: 100%;
}
.mui-bar-tab{
	background-color: #000;
}
.mui-bar-tab .mui-tab-item.mui-active {
	color: #fff;
}
.router-link-active {
	color: #fff !important;
}
</style>
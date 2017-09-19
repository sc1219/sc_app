<template>
  <div id="tmpl">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in list">
        <img :src="item">
      </mt-swipe-item>
    </mt-swipe>

    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
          <router-link to="/home/weather">
            <span class="mui-icon mui-icon-spinner-cycle mui-spin"></span>
            <div class="mui-media-body">天气</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
          <router-link to="/home/news">
            <span class="mui-icon mui-icon-list">
            </span>
            <div class="mui-media-body">新闻</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
          <router-link to="/home/img">
            <span class="mui-icon mui-icon-image"></span>
            <div class="mui-media-body">图片</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
          <router-link to="/home/map">
            <span class="mui-icon mui-icon-map"></span>
            <div class="mui-media-body">地图</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
          <a href="#">
            <span class="mui-icon mui-icon-paperplane"></span>
            <div class="mui-media-body">航班</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4">
          <a href="#">
            <span class="mui-icon mui-icon-pengyouquan"></span>
            <div class="mui-media-body">chrome</div>
          </a>
        </li>
      </ul>
    </div>
    <!-- 方形动画 -->
    <div class="out">
      <div class="in"></div>
    </div>
  <!-- 魔方 -->
    <div class="box">
      <div class="front"></div>
      <div class="back"></div>
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="left"></div>
      <div class="right"></div>

      <div class="front1"></div>
      <div class="back1"></div>
      <div class="top1"></div>
      <div class="bottom1"></div>
      <div class="left1"></div>
      <div class="right1"></div>

      <div class="front2"></div>
      <div class="back2"></div>
      <div class="top2"></div>
      <div class="bottom2"></div>
      <div class="left2"></div>
      <div class="right2"></div>

      <div class="front3"></div>
      <div class="back3"></div>
      <div class="top3"></div>
      <div class="bottom3"></div>
      <div class="left3"></div>
      <div class="right3"></div>

      <div class="front4"></div>
      <div class="back4"></div>
      <div class="top4"></div>
      <div class="bottom4"></div>
      <div class="left4"></div>
      <div class="right4"></div>

      <div class="front5"></div>
      <div class="bottom5"></div>
      <div class="left5"></div>
    </div>

  </div>
</template>
<script>

export default {
  name: "home",
  data() {
    return {
      list: [],
      value: ''
    };
  },
  created() {
    this.getimgs();
    this.changeColor();
  },
  methods: {
    changeColor() {
      // window.document.body.style.backgroundColor = "#8d6e63";
    },
    getimgs() {
      /* this.list = ["/static/images/bg1.jpg",
        "/static/images/bg2.jpg",
        "/static/images/bg3.jpg",
        "/static/images/bg4.jpg",
        "/static/images/bg5.jpg"]; */
      this.list = ["http://lorempixel.com/400/200/nature/",
        "http://lorempixel.com/400/200/animals/",
        "http://lorempixel.com/400/200/fashion/",
        "http://lorempixel.com/400/200/technics/",
        "http://lorempixel.com/400/200/city/",
      ]
    }
  }
}
</script>
<style lang="css" scoped>
#tmpl {
  padding-top: 40px;
  margin-bottom: 56px;
}

.mint-swipe {
  height: 200px;
}

.mint-swipe-items-wrap>div {
  height: 200px;
  background-color: #0094ff;
}

.mint-swipe-items-wrap img {
  height: 200px;
  width: 100%;
}

.mui-grid-view.mui-grid-9 {
  background-color: #000;
}

.mui-grid-view.mui-grid-9 .mui-icon {
  color: #fff;
}

.mui-grid-view.mui-grid-9 .mui-media-body {
  color: #fff;
}


/* 方形动画 */

.out {
  width: 300px;
  height: 300px;
  position: relative;
  background-color: #fff;
  margin: 100px auto;
  transform: rotate(45deg);
  overflow: hidden;
}

.in {
  width: 300px;
  height: 300px;
  background-color: #010f12;
  opacity: 1;
  transform: rotate(-45deg);
  animation-name: moveTest;
  /*2.设置动画的总耗时*/
  animation-duration: 2s;
  /*3.设置动画的播放次数，默认为1次  可以指定具体的数值，也可以指定infinite(无限次)*/
  animation-iteration-count: infinite;
  /*4.设置交替动画  alternate:来回交替*/
  animation-direction: alternate;
  /*animation-fill-mode: both;*/
  /*6.动画的时间函数*/
  animation-timing-function: linear;
  /*设置动画的播放状态  paused:暂停   running:播放*/
  animation-play-state: running;
}

@keyframes moveTest {
  from {
    transform: rotate(45deg);
  }
  25% {
    transform: rotate(135deg);
  }
  50% {
    transform: rotate(225deg);
  }
  75% {
    transform: rotate(315deg);
  }
  to {
    transform: rotate(395deg);
  }
}


/* 魔方 */

* {
  margin: 0;
  padding: 0;
}

.box {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 100px auto;
  transform-style: preserve-3d;
  transform: rotate3d(1, 2, 0, -45deg);
  perspective: 0px;
}

.box>div {
  position: absolute;
  opacity: .7;
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  transition: transform 3s;
  /*border-radius: 100px;*/
}

.box:hover>div {
  transform: none;
}

.front {
  width: 200px;
  height: 200px;
  transform: translateZ(100px);
  background-color: #ff8405;
}

.back {
  width: 200px;
  height: 200px;
  background-color: #13fff4;
  transform: translateZ(-100px);
}

.left {
  width: 200px;
  height: 200px;
  transform: translateX(-100px) rotateY(-90deg);
  background-color: #ff148f;
}

.right {
  width: 200px;
  height: 200px;
  background-color: #1a6dff;
  transform: translateX(100px) rotateY(90deg);
}

.bottom {
  width: 200px;
  height: 200px;
  background-color: #901fff;
  transform: translateY(100px) rotateX(-90deg);
}

.top {
  width: 200px;
  height: 200px;
  transform: translateY(-100px) rotateX(90deg);
  background-color: #66ff0f;
}

.front1 {
  transform: translateZ(80px);
  background-color: #ff8405;
}

.back1 {
  background-color: #13fff4;
  transform: translateZ(-80px);
}

.left1 {
  transform: translateX(-80px) rotateY(-90deg);
  background-color: #ff148f;
}

.right1 {
  background-color: #fff91d;
  transform: translateX(80px) rotateY(90deg);
}

.bottom1 {
  background-color: #901fff;
  transform: translateY(80px) rotateX(-90deg);
}

.top1 {
  transform: translateY(-80px) rotateX(90deg);
  background-color: #ff1414;
}

.front2 {
  transform: translateZ(60px);
  background-color: #ff8405;
}

.back2 {
  background-color: #13fff4;
  transform: translateZ(-60px);
}

.left2 {
  transform: translateX(-60px) rotateY(-90deg);
  background-color: #ff148f;
}

.right2 {
  background-color: #fff91d;
  transform: translateX(60px) rotateY(90deg);
}

.bottom2 {
  background-color: #901fff;
  transform: translateY(60px) rotateX(-90deg);
}

.top2 {
  transform: translateY(-60px) rotateX(90deg);
  background-color: #ff1414;
}

.front3 {
  transform: translateZ(40px);
  background-color: #ff8405;
}

.back3 {
  background-color: #13fff4;
  transform: translateZ(-40px);
}

.left3 {
  transform: translateX(-40px) rotateY(-90deg);
  background-color: #ff148f;
}

.right3 {
  background-color: #fff91d;
  transform: translateX(40px) rotateY(90deg);
}

.bottom3 {
  background-color: #901fff;
  transform: translateY(40px) rotateX(-90deg);
}

.top3 {
  transform: translateY(-40px) rotateX(90deg);
  background-color: #ff1414;
}

.front4 {
  transform: translateZ(20px);
  background-color: #ff8405;
}

.back4 {
  background-color: #13fff4;
  transform: translateZ(-20px);
}

.left4 {
  transform: translateX(-20px) rotateY(-90deg);
  background-color: #ff148f;
}

.right4 {
  background-color: #fff91d;
  transform: translateX(20px) rotateY(90deg);
}

.bottom4 {
  background-color: #901fff;
  transform: translateY(20px) rotateX(-90deg);
}

.top4 {
  transform: translateY(-20px) rotateX(90deg);
  background-color: #ff1414;
}

.front5 {
  transform: translateZ(0px);
  background-color: #ff8405;
}

.bottom5 {
  background-color: #901fff;
  transform: translateY(0px) rotateX(-90deg);
}

.left5 {
  transform: translateX(0px) rotateY(-90deg);
  background-color: #ff148f;
}
</style>


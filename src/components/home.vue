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
          <a href="#">
            <span class="mui-icon mui-icon-map"></span>
            <div class="mui-media-body">定位</div>
          </a>
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

    <div class="mui-card">
      <!--页眉，放置标题-->
      <div class="mui-card-header mui-card-media">
        <!-- <img src="../images/logo.png" /> -->
        <div class="mui-media-body">
          小M
          <p>发表于 2016-06-30 15:30</p>
        </div>
      </div>
      <!--内容区-->
      <div class="mui-card-content mui-card-media" style="height:40vw;background-image:url()">内容区</div>
      <!--页脚，放置补充信息或支持的操作-->
      <div class="mui-card-footer">页脚</div>
    </div>

    <div class="out">
      <div class="in"></div>
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
</style>


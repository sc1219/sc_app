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


</style>


<template>
  <div id="tmpl">
      <ul>
        <li v-for="item in list">
          <router-link v-bind="{to:'/home/news/newsinfo/'+item.id}">
            <h2>{{item.title}}</h2>
            <span>{{item.pubDate}}</span>
            <p>{{item.desc}}</p>
          </router-link>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: "news",
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getnews();
  },
  methods: {
    getnews() {
      this.$http.get("http://route.showapi.com/109-35?showapi_appid=45381&showapi_sign=326f542326ee48e4939176df9422efa1").then(function(res) {
        console.log(res.body);
        this.list = res.body.showapi_res_body.pagebean.contentlist;
      })
    }
  }
}
</script>
<style lang="css" scoped>
#tmpl {
  padding-top: 40px;
  margin-bottom: 56px;
}

ul {
  width: 100%;
  height: 100%;
  overflow: scroll;
  list-style: none;
}
li {
  list-style: none;
  padding: 0;
  padding: 17px;
  border-bottom: 1px solid #000;
  border-top: 1px solid #ccc;
  overflow: hidden;
}

li h2 {
  color: #000;
  line-height: 25px;
  font-size: 20px;
  font-weight: normal;
  text-shadow: 1px 1px 0px #ccc;
}

li p {
  color: #000;
  font-size: 14px;
  line-height: 20px;
  padding-top: 7px;
  height: 86px;
  overflow: hidden;
}
li span {
  color: #666;
}
</style>
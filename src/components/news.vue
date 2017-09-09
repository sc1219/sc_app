<template>
  <div id="tmpl">
      <ul>
        <li v-for="item in list">
          <router-link v-bind="{to:'/home/news/newsinfo/'+item.id}">
            <h2>{{item.title}}</h2>
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
}

ul,
li {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #666;
}

li h2 {
  color: #000;
  line-height: 30px;
  font-size: 23px;
}

li p {
  color: #000;
  font-size: 14px;
  line-height: 20px;
}
</style>
<template>
  <div id="tmpl">
      <ul>
          <li v-for="item in list">
              <ul>
                  <h3>{{item.title}}</h3>
                  <h3>时间：{{item.ct}}</h3>
                  <li v-for="item1 in item.list">
                      <img v-lazy="item1.middle">
                  </li>
              </ul>
          </li>
      </ul>
  </div>
</template>
<script>

  export default {
    name: "img",
    data () {
      return {
          list: []
      };
    },
    created(){
        this.getimg();
    },
    methods: {
        getimg(){
            this.$http.get("http://route.showapi.com/852-2?showapi_appid=45381&showapi_sign=326f542326ee48e4939176df9422efa1&type=1001").then(function(res){
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
ul,li {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
}
img {
    width: 100%;
}

image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
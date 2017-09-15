<template>
  <div id="tmpl">
      <h3>{{info.title}}</h3>
      <span>{{info.pubDate}}</span>
      <p>{{info.desc}}</p>
      <div v-for="item in info.imageurls">
          <img :src="item.url">
      </div>
  </div>
</template>
<script>
  export default {
    name: "newsinfo",
    data () {
      return {
          id:"",
          info: {

          }
      };
    },
    created(){
        this.id=this.$route.params.id;
        this.getinfo();
    },
    methods:{
        getinfo(){
            var url = "http://route.showapi.com/109-35?showapi_appid=45381&showapi_sign=326f542326ee48e4939176df9422efa1&id="+this.id;
            this.$http.get(url).then(function(res){
                this.info = res.body.showapi_res_body.pagebean.contentlist[0];
                console.log(res.body.showapi_res_body.pagebean.contentlist[0])
            })
        }
    }
  }
</script>
<style lang="css" scoped>
    #tmpl {
        padding: 10px;
        padding-top: 40px;
        margin-bottom: 56px;
    }
    h2 {
        line-height: 30px;
    }
    p {
        font-size: 16px;
        line-height: 27px;
        color: #000;
        padding-top: 10px;
    }
    img {
        width: 100%;
    }
</style>
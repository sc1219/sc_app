<template>
  <div id="tmpl">
    <ul>
      
        <li v-for="item in list">
          <router-link v-bind='{to:"/movie/movieinfo/"+item.id}'>
            <img :src="item.images.large">
            <h4>{{item.title}}</h4>
            <h5>{{item.original_title}}</h5>
          </router-link>
        </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "movie",
    data () {
      return {
        list:[]
      };
    },
    created(){
      this.getmovie();
    },
    methods:{
      getmovie(){
        this.$http.jsonp("https://api.douban.com/v2/movie/in_theaters").then(function(res){
          console.log(res.body);
          this.list = res.body.subjects;
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
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  li {
    width: 50%;
    list-style: none;
    float: left;
    height: 300px;
    box-sizing: border-box;
    padding: 7px;
  }
  li:nth-of-type(odd){
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  li:nth-of-type(even){
    border-bottom: 1px solid #ccc;
  }
  img {
    width: 100%;
    height: 240px;
    box-shadow: 2px 2px 2px 1px #aaa;
  }
  h4 {
    line-height: 20px;
    text-align: center;
    font-size: 15px;
    font-weight: normal;
    color: #000;
  }
  h5 {
    line-height: 10px;
    font-size: 14px;
    text-align: center;
  }
</style>
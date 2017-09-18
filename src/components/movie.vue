<template>
  <div id="tmpl">
    <ul>
      
        <li v-for="item in list">
          <router-link v-bind='{to:"/movie/movieinfo/"+item.id}'>
            <img :src="item.images.large">
            <h4>{{item.title}}</h4>
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
          // console.log(res.body);
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
    height: 350px;
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
    height: 250px;
  }
  h4 {
    text-align: center;
    color: #000;
    
  }
</style>
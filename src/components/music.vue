<template>
    <div id='tmpl'>
        <input type="text" v-model="value" placeholder="搜索" v-on:keydown.enter="search">
        <ul v-if="flag" class="alist">
            <li><h2>为您推荐</h2></li>
            <li v-for="item in list">
                <router-link v-bind="{to:'/music/musicinfo/'+item.song_id}" >
                    <img :src="item.pic_big">
                    <div>
                        <p>{{item.title}}</p><p>{{item.author}}</p>
                    </div>
                    
                </router-link>
            </li>
        </ul>
        <ul v-if="!flag" class="blist">
            <li v-for="item in slist">
                <router-link v-bind="{to:'/music/musicinfo/'+item.songid}" v-if="!flag">
                    <p><b>歌名：</b>{{item.songname}}</p>
                    <p><b>歌手：</b>{{item.artistname}}</p>
                </router-link>
            </li>
        </ul>     
    </div>
</template>
<script>
import { Toast } from 'mint-ui';

export default {
    name: "music",
    data() {
        return {
            list: [],
            value:"",
            slist: [],
            flag: true
        };
    },
    created() {
        this.getmusic();
    },
    methods: {
        getmusic() {
            this.$http.jsonp("http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.getRecommandSongList&song_id=877578&num=10").then(function(res) {
                this.list = res.body.result.list;
                this.flag = true;
                console.log(this.list);
            })
        },
        search(){
            this.$http.jsonp("http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=" + this.value).then(function(res){
               console.log(res.body);
                if(res.body.error_code == 22000){
                    this.slist = res.body.song;
                    this.flag = false;
                }else {
                    Toast("未查询到该歌曲！");
                    this.flag= true;
                }

            })
        }
    }
}
</script>
<style lang="less" scoped>
#tmpl {
    margin-bottom: 56px;
    padding-top :40px;
}
.alist {
    width:100%;
    li {
        width: 100%;
        height: 100px;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        box-shadow: 1px 1px #000;
        box-sizing: border-box;
        h2 {
            font-size:  27px;
            text-align: center;
        }
        a {
            color: #000;
            div {
                float: left;
                text-align: left;
                margin-left: 30px;
                margin-top: 20px;
               p {
                   font-size: 18px;
                   color: #000;
               }
            }
            img {
                height: 100px;
                float: left;
            }
        }
    }
    li:first-of-type {
        height: 50px;
    }
}
.blist {
    width: 100%;
    li {
        width: 100%;
        height: 70px;
        padding-left: 30px;
        padding-top: 7px;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        box-shadow: 1px 1px #000;
        p {
            color: #000;
            font-size: 16px;
        }
    }
}
</style>
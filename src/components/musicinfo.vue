<template>
    <div id='tmpl'>
        <a-player :music="info" :showlrc="3" :narrow="false" v-if="flag" theme="#b7daff" mode="circulation" listmaxheight='96px' ref="player"></a-player>
    </div>
</template>
<script>

import VueAplayer from 'vue-aplayer';

export default {
    components: {
        'a-player': VueAplayer
    },
    name: "musicinfo",
    data() {
        return {
            id: "",
            url: "",
            info: {},
            flag: false
        };
    },
    created() {
        this.id = this.$route.params.id;
        this.playmusic();
    },
    methods: {
        playmusic() {
            this.$http.jsonp("http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=" + this.id).then(function(res) {
                console.log(res.body);
                this.url = res.body.bitrate;
                this.info.url = res.body.bitrate.file_link;
                this.info.lrc = res.body.songinfo.lrclink;
                this.info.title = res.body.songinfo.title;
                this.info.author = res.body.songinfo.author;
                this.info.pic = res.body.songinfo.pic_small;
                this.flag = true;
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
.aplayer-withlrc.aplayer .aplayer-info {
    height: 200px;
}
</style>
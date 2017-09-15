<template>
    <div id='music'>
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
<style lang="css">
#music {
    position: absolute;
    top: 40px;
    bottom: 56px;
    width: 100%;
}

/* .aplayer {
    height: 100%;
}

.aplayer .aplayer-info {
    height: 100% !important;
}

.aplayer .aplayer-info .aplayer-music {
    text-align: center !important;
}

.aplayer .aplayer-lrc {
    overflow: visible !important;
}

.aplayer-withlrc.aplayer .aplayer-pic {
    bottom: 0 !important;
    position: absolute;
}

.aplayer .aplayer-info .aplayer-controller {
    bottom: 0 !important;
    left: 0 !important;
    position: absolute !important;
    margin-left: 100px;
    width: 270px;
}

.aplayer-withlrc.aplayer .aplayer-lrc {
    margin-top: 100px;
}

.aplayer-withlrc.aplayer .aplayer-info {
    margin-left: 0px !important;
} */
</style>
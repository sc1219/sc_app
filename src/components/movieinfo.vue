<template>
    <div id='tmpl'>
        <div class="left">
            <img :src="thisid.images.large">
        </div>
        <div class="right">
            <ul>
                <li><b>电影名称：</b>{{thisid.title}}</li>
                <li><b>英文名称：</b>{{thisid.original_title}}</li>
                <li><b>上映年份：</b>{{thisid.year}}年</li>
                <li><b>豆瓣评分：</b>{{thisid.rating.average}}分</li>
                <li><b>电影类别：</b><span v-for="item in thisid.genres">{{item}}/</span></li>
                <li><b>收藏次数：</b>{{thisid.collect_count}}次</li>
            </ul>
            <div class="director" v-for="item in thisid.directors">
                <h4>导  演</h4>
                <img :src="item.avatars.large">
                <p><b>姓名</b>：{{item.name}}</p>
                <a :href="item.alt">(查看导演详细信息)</a>
            </div>
            <h4>主   演</h4>
            <div class="actor" v-for="item in thisid.casts">
                <img :src="item.avatars.large">
                <p><b>姓名</b>：{{item.name}}</p>
                <a :href="item.alt">(查看演员详细信息)</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "movieinfo",
    data() {
        return {
            id: "",
            list: [],
            thisid: {}
        };
    },
    created() {
        this.id = this.$route.params.id;
        this.getinfo();
    },
    methods: {
        getinfo() {
            var url = "https://api.douban.com/v2/movie/in_theaters";
            this.$http.jsonp(url).then(function(res) {
                this.list = res.body.subjects;
                // console.log(this.list);
                this.list.forEach((element) => {
                    if (this.id == element.id) {
                        this.thisid = element;
                        console.log(this.thisid);
                        return;
                    }

                });
            });
        }
    }
}
</script>
<style lang="css" scoped>
#tmpl {
    overflow: hidden;
    padding: 10px;
    margin-bottom: 56px;
    padding-top: 45px
}

.left img {
    width: 100%;
    box-shadow: 0px 0px 2px 2px #aaa;
}


ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
    height: 40px;
    font-size: 18px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    margin: 10px;
}
.director,.actor {
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    margin: 10px;
}
.right>h4 {
    margin-left: 10px;
    font-size: 18px;
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    border-radius: 7px;
    background: linear-gradient(to bottom,#aaa 0, #fff 100%);
}
.director h4 {
    font-size: 18px;
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    border-radius: 7px;
    background: linear-gradient(to bottom,#aaa 0, #fff 100%);
}
.director img,.actor img {
    width: 70px;
    float: left;
    box-shadow: 0px 0px 1px 1px #aaa;
}
.director p,.actor p {
    font-size: 17px;
    padding-left: 80px;
    padding-top: 20px;
}
.director a,.actor a {
    color: #0094ff;
    font-size: 16px;
    margin-left: 50px;
}
</style>
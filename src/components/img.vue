<template>
    <div id="tmpl">
        <ul>
            <li v-for="item in list">
                <ul>
                    <li class="title">
                        <h4>{{item.title}}</h4>
                        <p>时间：{{item.ct}}</p>
                    </li>
                    <li v-for="item1 in item.list">
                        <div class="box">
                            <img class="mini-cover spinner" lazy="loading" v-lazy="item1.middle" width="100%" height="400">
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    name: "img",
    data() {
        return {
            list: []
        };
    },
    created() {
        this.getimg();
    },
    methods: {
        getimg() {
            this.$http.get("http://route.showapi.com/852-2?showapi_appid=45381&showapi_sign=326f542326ee48e4939176df9422efa1&type=1001").then(function(res) {
                console.log(res.body);
                this.list = res.body.showapi_res_body.pagebean.contentlist;
            })
        },
        handler(component) {
            console.log('this component is showing')
        }
    }
}
</script>
<style lang="less" scoped>
img[lazy=loading] {
    display: block;
    width: 40px;
    height: 40px;
    margin: 140px auto;
    background-color: #333;
    border-radius: 100%; 
    -webkit-animation: scaleout 1.0s infinite ease-in-out;
    animation: scaleout 1.0s infinite ease-in-out;
}
.box {
    height: 300px;
    overflow: hidden;
    box-shadow: 0px 0px 2px 2px #ccc;
}


#tmpl {
    padding-top: 40px;
    margin-bottom: 56px;
}

ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
}

li {
    padding: 7px;
}

img {
    width: 100%;
    height: 300px;
}
.title {
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 2px 2px #666;
    background-color: #333;
    color: #fff;
    h4 {
        font-weight: normal;
        line-height: 25px;
    }
    p {
        margin-bottom: 0px;
        color: #fff;
    }
}
</style>
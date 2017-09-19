<template>
    <div id='tmpl'>
        <ul>

            <li>
                <h3>湖北  武汉</h3>
            </li>
            <li>
                <h4 class="today">今 日 天 气</h4>
            </li>
            <li class="date"><b>日期：{{data.f1.day}}</b></li>
            <li class="content day">白天：
                <img :src="data.f1.day_weather_pic"> {{data.f1.day_weather}}
                <br> 温度：{{data.f1.day_air_temperature}}度 <br> 风力：{{data.f1.day_wind_power}}
                <br> 紫外线：{{data.f1.ziwaixian}}
            </li>
            <li class="content night">夜间：
                <img :src="data.f1.night_weather_pic"> {{data.f1.night_weather}} <br> 温度：{{data.f1.night_air_temperature}}度 <br> 风力：{{data.f1.night_wind_power}}
            </li>
            <li>
                <h4 class="today">未来一周天气</h4>
                <ul>
                    <li class="date"><b>日期：{{data.f2.day}}</b></li>
                    <li class="content day">白天：
                        <img :src="data.f2.day_weather_pic"> {{data.f2.day_weather}}
                        <br> 温度：{{data.f2.day_air_temperature}}度 <br> 风力：{{data.f2.day_wind_power}}
                        <br> 紫外线：{{data.f2.ziwaixian}}
                    </li>
                    <li class="content night">夜间：
                        <img :src="data.f2.night_weather_pic"> {{data.f2.night_weather}} <br> 温度：{{data.f2.night_air_temperature}}度 <br> 风力：{{data.f2.night_wind_power}}
                    </li>
                </ul>
                <ul>
                    <li class="date"><b>日期：{{data.f3.day}}</b></li>
                    <li class="content day">白天：
                        <img :src="data.f3.day_weather_pic"> {{data.f3.day_weather}}
                        <br> 温度：{{data.f3.day_air_temperature}}度 <br> 风力：{{data.f3.day_wind_power}}
                        <br> 紫外线：{{data.f3.ziwaixian}}
                    </li>
                    <li class="content night">夜间：
                        <img :src="data.f3.night_weather_pic"> {{data.f3.night_weather}} <br> 温度：{{data.f3.night_air_temperature}}度 <br> 风力：{{data.f3.night_wind_power}}
                    </li>
                </ul>
                <ul>
                    <li class="date"><b>日期：{{data.f4.day}}</b></li>
                    <li class="content day">白天：
                        <img :src="data.f4.day_weather_pic"> {{data.f4.day_weather}}
                        <br> 温度：{{data.f4.day_air_temperature}}度 <br> 风力：{{data.f4.day_wind_power}}
                        <br> 紫外线：{{data.f4.ziwaixian}}
                    </li>
                    <li class="content night">夜间：
                        <img :src="data.f4.night_weather_pic"> {{data.f4.night_weather}} <br> 温度：{{data.f4.night_air_temperature}}度 <br> 风力：{{data.f4.night_wind_power}}
                    </li>
                </ul>
                <ul>
                    <li class="date"><b>日期：{{data.f5.day}}</b></li>
                    <li class="content day">白天：
                        <img :src="data.f5.day_weather_pic"> {{data.f5.day_weather}}
                        <br> 温度：{{data.f5.day_air_temperature}}度 <br> 风力：{{data.f5.day_wind_power}}
                        <br> 紫外线：{{data.f5.ziwaixian}}
                    </li>
                    <li class="content night">夜间：
                        <img :src="data.f5.night_weather_pic"> {{data.f5.night_weather}} <br> 温度：{{data.f5.night_air_temperature}}度 <br> 风力：{{data.f5.night_wind_power}}
                    </li>
                </ul>
                <ul>
                    <li class="date"><b>日期：{{data.f6.day}}</b></li>
                    <li class="content day">白天：
                        <img :src="data.f6.day_weather_pic"> {{data.f6.day_weather}}
                        <br> 温度：{{data.f6.day_air_temperature}}度 <br> 风力：{{data.f6.day_wind_power}}
                        <br> 紫外线：{{data.f6.ziwaixian}}
                    </li>
                    <li class="content night">夜间：
                        <img :src="data.f6.night_weather_pic"> {{data.f6.night_weather}} <br> 温度：{{data.f6.night_air_temperature}}度 <br> 风力：{{data.f6.night_wind_power}}
                    </li>
                </ul>
                <ul>
                    <li class="date"><b>日期：{{data.f7.day}}</b></li>
                    <li class="content day">白天：
                        <img :src="data.f7.day_weather_pic"> {{data.f7.day_weather}}
                        <br> 温度：{{data.f7.day_air_temperature}}度 <br> 风力：{{data.f7.day_wind_power}}
                        <br> 紫外线：{{data.f7.ziwaixian}}
                    </li>
                    <li class="content night">夜间：
                        <img :src="data.f7.night_weather_pic"> {{data.f7.night_weather}} <br> 温度：{{data.f7.night_air_temperature}}度 <br> 风力：{{data.f7.night_wind_power}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "weather",
    data() {
        return {
            data: {},
            list: []
        };
    },
    created() {
        this.getweather();

    },
    methods: {
        getweather() {
            this.$http.get("http://route.showapi.com/9-5?showapi_appid=45381&showapi_sign=326f542326ee48e4939176df9422efa1&from=5&lng=114.3&lat=30.6&needMoreDay=1").then(function(res) {
                console.log(res.body);
                this.data = res.body.showapi_res_body;
            })
        }

    }
}

</script>
<style lang="css" scoped>
#tmpl {
    padding: 40px 20px 50px 20px;
}

h3 {
    text-align: center;
}

img {
    width: 27px;
    height: 27px;
}

[v-cloak] {
    display: none
}
li {
    font-size: 16px;
}
li.content {
    padding-left: 30px;
}
li.day {
    background-color: rgba(0,160,255,.3);
    box-shadow: 0px 1px 2px 1px #ccc;
    margin-bottom: 1px;
    padding: 10px;
}
li.night {
    background-color: rgba(0,255,31,.3);
    box-shadow: 0px 1px 2px 1px #ccc;
    padding: 10px;
    margin-bottom: 10px;
}
li.date {
    background-color: #ccc;
    box-shadow: 0px 1px 2px 1px #ccc;
   
}
.date b {
     font-weight: normal;
}
h4.today {
    line-height: 40px;
    height: 40px;
    text-align: center;
    font-weight: normal;
    border-radius: 5px;
    background-color: rgba(0,148,255,0.7);
    color: #fff;
}


</style>
<template>
  <div id='tmpl'>
    <!-- <div class="amap-wrapper">
              <el-amap :vid="'amap-vue'"></el-amap>
            </div> -->
    <div class="amap-page-container">
      <el-amap vid="amap" :plugin="plugin" class="amap-demo">
      </el-amap>
    </div>
  </div>
</template>
<script>


export default {
  name: "map",
  data() {
    
    return {
      plugin: [{
        pName: 'Scale',
        events: {
          init(instance) {
            console.log(instance);
          }
        }
      },
      {
        pName: 'MapType',
        defaultType: 0,
        events: {
          init(instance) {
            console.log(instance);
          }
        }
      }]
    }
  },
  created() {

  },
  methods: {

  },
}  
</script>
<style lang="css" scoped>
#tmpl {
  position: absolute;
  width: 100%;
  bottom: 50px;
  top: 40px;
}
.amap-page-container {
  height: 100%;
  width: 100%;
}
.amap-demo {
  width: 100%;
  height: 100%;
}
</style>
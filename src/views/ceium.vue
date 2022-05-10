<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
onMounted(()=>{
  // const viewer=new Cesium.Viewer('cesiumContainer')
  var custom =new Cesium.ArcGisMapServerImageryProvider({
    url:'//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
  })
  
  var viewer=new Cesium.Viewer('cesiumContainer',{
    baseLayerPicker:false,
    //设置图像提供者的程序
    imageryProvider:custom,    
    //设置cesium 世界地形
    terrainProvider:Cesium.createWorldTerrain({
      requestWaterMask:true,
      requestVertexNormals:true
    })
  })

  viewer.camera.setView({
    destination:Cesium.Cartesian3.fromDegrees(113.318977,23.114155,2000),
    orientation:{
      heading:Cesium.Math.toRadians(90),
      pitch:Cesium.Math.toRadians(-90)
    }
  })
})
</script>

<template>
  <div id="app">
    <div id="cesiumContainer"></div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body,#cesiumContainer{
  width:100%;
  height: 100%;
  margin:0;
  padding:0;
  overflow: hidden;
}
</style>

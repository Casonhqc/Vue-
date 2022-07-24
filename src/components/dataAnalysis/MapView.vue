<template>
    <div class="map-view">
        <div id="main"></div>
    </div>
</template>
<script>
import geoJson from '@/assets/china.json'
export default {
    data(){
        return{

        }
    },
    mounted(){
        let myChart = this.$echarts.init(document.getElementById('main'))
        this.$echarts.registerMap('china',geoJson)
        console.log(geoJson);

        let option = {
            geo:{
                map:'china',
                aspectScale:1.5,
                zoom:1
                
            },
            series:[{
                type:'map',
                zom:1.1,
                map:'china'
            }]
        }
        myChart.setOption(option)
    }
}
</script>
<style lang="less">
.map-view{
    width: 100%;
    #main{
        width: 100%;
        height: 600px;
    }
}
</style>
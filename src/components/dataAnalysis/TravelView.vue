<template>
    <div class="map-view">
        <div id="main"></div>
    </div>
</template>
<script>
import geoJson from '@/assets/china.json'
import { travel } from '@/api/api'
export default {
    data() {
        return {

        }
    },
    created(){
        travel().then(res =>{
            if(res.status === 200){
                let {points, linesData} = res.data.data
                this.draw(points,linesData)
                console.log(linesData);
                
                
            }
        })
    },
    methods: {
        draw(points,linesData) {
            let myChart = this.$echarts.init(document.getElementById('main'))
            this.$echarts.registerMap('china', geoJson)
            console.log(geoJson);

            let option = {
                geo: {
                    map: 'china',
                    aspectScale: 1.5,
                    zoom: 1

                },
                series: [{
                    type: 'map',
                    zom: 1.1,
                    map: 'china'
                },
                {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    showEffectOn: 'emphasis',
                    symbolSize: 10,
                    zlevel: 1,
                    data:points,
                    rippleEffect: {
                        period: 15,
                        scale: 4,
                        brushType: 'fill'
                    }
                },
                {
                    type:'lines',
                    zlevel:2,
                    effect:{
                        show:true,
                        period:4,
                        sympol:'arrow',
                        symbolSize:20,
                        trailLength:0.4
                    },
                    lineStyle:{
                        normal:{
                            color: '#1DE9B6',
                            width:3,
                            opacity:0.5,
                            curveness:0.3
                        }
                    },
                    data:linesData
                }
                ]
            }
            myChart.setOption(option)
        }
    }
}
</script>
<style lang="less">
.map-view {
    width: 100%;

    #main {
        width: 100%;
        height: 600px;
    }
}
</style>
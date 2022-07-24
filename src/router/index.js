
import Vue from "vue"
import Router from "vue-router"

// import HelloWorld from "../components/HelloWorld.vue"

Vue.use(Router)

export default new Router({
    mode:'history',
    base:"/vue/",
    routes:[
        {
            path:'/',
            hidden:true,
            // component:HelloWorld
            redirect:'/login',
            component: () => import('@/components/Login')
           
            
        },
        {
            path:'/login',
            
            name:'首页',
            hidden:true,
            // component:HelloWorld
            component: () => import('@/components/Login')
           
            
        },
        {
            path:'/hello',
            name:'学生管理',
            // component:HelloWorld
            component: () => import('@/components/HelloWorld'),
            redirect:'/hello/student',
            iconClass:'fa fa-users',
            children:[ {
                path:'/hello/student',
                name:'学生列表',
                iconClass:'fa fa-list',
                component:() => import('@/components/students/StudentList')
            },
            {
                path:'/hello/Info',
                name:'信息列表',
                iconClass:'fa fa-list-alt',
                component:() => import('@/components/students/InfoList')
            },
            {
                path:'/hello/Infos',
                name:'信息管理',
                iconClass:'fa fa-list-alt',
                component:() => import('@/components/students/InfoLists')
            },
            {
                path:'/hello/work',
                name:'作业列表',
                iconClass:'fa fa-list-ul',
                component:() => import('@/components/students/WorkList')
            },
            {
                path:'/hello/workment',
                name:'作业管理',
                iconClass:'fa fa-th-list',
                component:() => import('@/components/students/WorkMent')
            }
            
        ]
               
           
            
        },
        {
            path:'/hello',
            name:'数据分析',
            // component:HelloWorld
            component: () => import('@/components/HelloWorld'),
            
            iconClass:'fa fa-bar-chart',
            children:[ {
                path:'/hello/dataview',
                name:'数据概览',
                iconClass:'fa fa-line-chart',
                component:() => import('@/components/dataAnalysis/DataView')
            },
            {
                path:'/hello/mapview',
                name:'地图概览',
                iconClass:'fa fa-line-chart',
                component:() => import('@/components/dataAnalysis/MapView')
            },
            {
                path:'/hello/scoremap',
                name:'分数图',
                iconClass:'fa fa-line-chart',
                component:() => import('@/components/dataAnalysis/ScoreMap')
            },
            {
                path:'/hello/travelview',
                name:'旅游概览',
                iconClass:'fa fa-line-chart',
                component:() => import('@/components/dataAnalysis/TravelView')
            },
          
            
        ]
               
           
            
        },
        {
            path:'/users',
            name:'用户中心',
            iconClass: 'fa fa-user',
            component: () => import('@/components/HelloWorld'),
            children: [
                {
                    path:'/users/user',
                    name: '权限管理',
                    iconClass: 'fa fa-line-chart',
                    component:() => import('@/components/users/user')
                }
            ]
           
            
        },
        {
            path:'*',
            name:'NotFound',
            hidden:true,
            component:()=> import('@/components/NotFound')
        }
    ],
    
})
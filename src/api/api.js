import service from "../service";
import qs from 'qs'


//登录接口
export function login(data){
    return service ({
        method:'post',
        url: '/login',
        data
    })
}

//学生列表查询接口
export function students(params){
    return service({
        method:'get',
        url:'/students',
        params
    })
}

//学生列表删除接口
export function studentDel(id){
    return service({
        method:'delete',
        url:`/students/${id}`
    })
}

//学生列表查询

//学生列表添加接口
// export function studentsInfo(data){
//          data = qs.stringify(data)
//             return service({
//                 method:'post',
//                 url:'/info',
//                 data
//             })
//             }

export function updateInfo(type,data){
         data = qs.stringify(data)
         let obj = {method:type, url:'/info',data}
            return service(obj)
            }

//信息列表获取
export function getInfo(){
    return service({
        method:'get',
        url:'/info',
        
    })
}

//信息列表删除
export function delInfo(id){
    return service({
        method:'delete',
        url:`/info/${id}`
    })
}

//数据概览接口
export function dataView(){
    return service({
        method:'get',
        url:'/dataview'
    })
}

//多点请求
export function travel(){
    return service({
        method:'get',
        url:'/travel'
    })
}

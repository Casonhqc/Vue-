module.exports ={
    devServer:{
        open:true,
        port:8080,
        proxy:{
            'api':{
                target:'http://1.116.64.64:5004/api2/',
                changeOrigin: true,
                pathRewrite:{
                    '^/api':''
                }
        }
    },
    clientLogLevel:'debug',
    
    publicPath:process.env.NODE_ENV === 'production' ? '/vue' : '/'
    
    
}
}
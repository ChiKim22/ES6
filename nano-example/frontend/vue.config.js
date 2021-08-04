module.exports={
    devServer:{
        // '/api' 로 시작되는 요청 주소 정의
        proxy:{
            '/api':{
                target: 'http://localhost:3000/api',
                chargeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    },

    // Release Location
    // try 'npm run bulid'
    outputDir: '../backend/public',

    transpileDependencies: [
        'vuetify'
    ]
}

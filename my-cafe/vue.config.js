module.exports={
    devServer:{
        proxy:{
            '/api':{
                target:'https://jsonplaceholder.typicode.com',
                changeOrgin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    },

    transpileDependencies: [
      'vuetify'
    ]
}

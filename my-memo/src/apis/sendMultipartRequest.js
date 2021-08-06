import axios from 'axios'

const instance = axios.create({

});

instance.interceptors.request.use(
    //request 실행 직전
    (config)=>{
        const token = localStorage.getItem('accessToken')
        if(token){
            config.headers.Authorzation=token
        }else{
            console.log('No Token')
            config.headers['Content-Type']='multipart/form-data';
        }
        return config;
    },
    //요청 에러 처리.
    (error)=>{
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    //http status == 200
    (response)=>{
        return response;
    },
    (error)=>{
        return Promise.reject(error)
    }
);

export default instance;
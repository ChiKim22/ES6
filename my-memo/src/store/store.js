import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        accessToken:null
    },
    getters:{
        isAuth(state) {
            if(state.accessToken == null) return false;
            return true;
        }
    },
    mutations:{
        signin(state, payload){
            state.accessToken = payload.accessToken
            localStorage.setItem('accessToken', state.accessToken)
        },
        signout(state){
            state.accessToken = null
            localStorage.removeItem('accessToken')
            location.reload();
        },
        getAccessToken(state){
            state.accessToken = localStorage.getItem('accessToken')
        },
        loginFailed(state){
            state.accessToken = null;
            localStorage.removeItem('accessToken');
            location.reload();
        }
    },
    actions:{
        signin({commit}, payload){
            const data = {userid: payload.userId, password:payload.password}
            return axios.get('/api/auth/login', data)
            .then(res => {
                if(res.status == 200){
                    commit('signin', {accessToken:res.data.token})
                }
            })
            .catch(error =>{
                commit('loginFailed')
                return Promise.reject(error)
            })
        }
    }
})
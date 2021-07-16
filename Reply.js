Vue.component('comments', {
    template:`<div>
    <span>NickName</span> 
        <input type="text" v-model="user">
        <span>Content</span>
        <input v-model="comment">
        <button @click="save" type="submit">Upload!</button>
        <span>List</span>
        <ul>
            <li v-for="msg in messages">
                <p>{{ msg.user }}: {{ msg.comment }}</p>
            </li>
        </ul>
    </div>`,
    data(){
        return {
            user:null,
            comment:null,
            messages:[]
        }
    },
    methods:{
        save(){
            const message={
            user:this.user,
            comment:this.comment
        };

            this.messages.unshift(message) // 제일 앞에 집어넣음.
            this.user=null
            this.comment=null // save 후 비워주기
        }
    }
})

let reply = new Vue({
    el:'#comment'
});
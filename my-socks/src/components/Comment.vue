<template>
    <div>
        <span>NickName</span> 
        <input type="text" v-model="user">
        <span>Content</span>
        <input v-model="comment">
        <button @click="save" type="submit">Upload!</button>
        <br>
        <span>List</span>
        <ul>
            <li v-for="(msg, i) in messages" :key="i">
                <p>{{ msg.user }}: {{ msg.comment }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
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
}
</script>
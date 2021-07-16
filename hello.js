let app = new Vue({
    el:'#title',
    data: {
        // message:'Hello',
        // name:'everyone'
        message:{
            greetings:'Hello',
            age:23
        }
    }
});

let app2 = new Vue({
    el:'#app',
    data: {
        //attribute
        address:'https://www.google.com',
        age:20
    }
})

let app3 = new Vue({
    el:'#app2',
    data: {
        todos: [
            {text:'JavaScript 배우기.'},
            {text:'Vue 배우기.'},
            {text:'멋진 것 만들기.'}
     ]
    }
})

let app4 = new Vue({
    el:'#app3',
    data: {
        user: {
            userid:'user123',
            name:'Steve Jobs',
            email:'jobs@icloud.com'
        }
    }
})

let app5 = new Vue({
    el:'#app4',
    data: {
        counter:0
    },
    methods: {
        addCount() {
            this.counter += 1
        },
        subCount() {
            this.counter -= 1
        }
    }
})

let app6 = new Vue({
    el:'#app5',
    data: {
        message:'Select a user',
        users:[{name:'User'}, {name:'Admin'}]
    },
    methods:{
        sayHi(name){
            this.message = 'Welcome, '+name
        }
    }
})

let app7 = new Vue({
    el:'#app6',
    data: {
      comment:''
    }
})

let app8 = new Vue({
    el:'#app7',
    data: {
      value:false, // 전체 체크
      values:[] // 각각 체크
    }
})

let app9 = new Vue({
    el:'#app8',
    data: {
     value:'Hello',
     value2:'Hello'
    }
})

let app10 = new Vue({
    el:'#app9',
    data: {
        age:23
    }
})

let app11 = new Vue({
    el:'#app10',
    data: {
        message:''
    }
})

let computed = new Vue({
    el:'#computed',
    data: {
        user_id:'user123',
        user_grade:'Silver',
        age:20
    },
    computed: {
        user_info() {
            return this.user_id + ' (' + this.user_grade + ')'
        },
        age_msg(){
          let str='Adult'
          if(this.age < 20) str='Not Adult'
          return str
        }
    }
})

Vue.component('hello', { // 전역등록
    props:['name'],
    template:'<p>{{message}}</p>',
    data: function() {
        return {message: 'Hello! ' + this.name}
    }
})

let component = new Vue({
    el:'#component',
    components:{ // 지역 선언
        'local-hello':{
            template:'<p>This is local component</p>'
        }
    }
})

Vue.component('add', {
    template:'<button @click="add">{{count}}</button>',
    data() {
        return {count:0}
    },
    methods:{
        add(){
            this.count += 1
            //update Total count
            this.$emit('event-add', 1); // 파라미터에는 숫자 뿐 아니라 객체도 가능함.
        }
    }
})

let component2 = new Vue({
    el:'#component2',
    data:{
        totalCount:0
    },
    methods:{
        updateTotal(count){
            this.totalCount += count
        }
    }
})
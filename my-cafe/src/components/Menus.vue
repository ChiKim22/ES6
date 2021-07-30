<template>
    <div id="app">
        <h1>Menus</h1>
        <ul>
            <li v-for="menu in menus" :key="menu.id">
                <a :href="menuAddress(menu.id)">{{ menu.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Menus',
    data(){
        return {
            menus:[
                {
                    id:1,
                    name:'아메리카노',
                    price:1500
                },
                {
                    id:2,
                    name:'카페모카',
                    price:1800
                }, 
                {
                    id:3,
                    name:'그린티라떼',
                    price:3000
                }]
        }
    },
        methods:{
            menuAddress(id){
                return '/menuitem/' +id
            }
        }
};
</script>
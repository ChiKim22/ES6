<template>
    <li>
        {{ todo.text }}
        <button class="app" @click="$emit('check', todo.id)">V</button>
        <button @click="$emit('remove', todo.id)">X</button>
        <p class="app" v-if="todo.date">{{todo.date}}</p>

    </li>
</template>


<script>
export default{
    props:{
        todo:{
            type: Object,
            required: true
        }
    }
}
</script>
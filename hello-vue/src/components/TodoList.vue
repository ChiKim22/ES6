<template>
    <div>
        <BaseInputText
            v-model="newTodoText"
            placeholder="New todo"
            @keydown.enter="addTodo"
            />
    <ul v-if="todos.length">
        <TodoListItem
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @remove="removeTodo"
            @check="checkTodo"
        />
    </ul>

    <p v-else>
        Nothing left in the list. Add a new todo in input plz.
    </p>    
</div>
</template>


<script>
import BaseInputText  from './BaseInputText.vue'
import TodoListItem from './TodoListItem.vue'

let nextTodoId = 1

export default {
    components: {
        BaseInputText, TodoListItem
    },
    data(){
        return {
            newTodoText: '',
            todos:[
                {
                    id: nextTodoId++,
                    text: 'Example'
                }
            ]
        }
    },
    methods:{
        addTodo() {
            const trimmeddText = this.newTodoText.trim()
            if (trimmeddText) {
                this.todos.push({
                id: nextTodoId++,
                text: trimmeddText
                })
                this.newTodoText = ''
            }
        },
        removeTodo(idToRemove) {
            this.todos = this.todos.filter(todo => {
                return todo.id !==  idToRemove
            })
        },
        checkTodo(){
            const date = new Date()

            this.date = date.getDate()

            const todos = date

            return todos == checkTodo

        }
    }
}

</script>
<template>
    <div id="app">
        <v-container fluid>
            <v-data-iterator :items="books" hide-default-footer hide-default-header>
                <template v-slot:default="props">
                    <v-row>
                        <v-col v-for="book in props.items" :key="book.bookId" cols="5">
                            <v-card >
                                <v-img max-height="150" contain :src="book.cover"/>
                                <v-divider></v-divider>
                                <v-card-title>
                                    <router-link :to="'/books/'+book.bookId">{{book.title}}</router-link>
                                </v-card-title>
                                <v-card-subtitle>{{book.author}}</v-card-subtitle>
                            </v-card>
                        </v-col>
                    </v-row>
                </template>
                  </v-data-iterator>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:"Books",
    data(){
        return {
            books:[],
            err_msg:''
        }
    },
    mounted(){
        axios.get('/api/books')
        .then(response=>{
            console.log(response.data)
            this.books = response.data
        })
        .catch(err=>{
            this.err_msg = err.err_msg
        })
    }
}
</script>
<template>
    <div id="detail">
        <h1>BookInfo</h1>
            <v-container fluid>
                <v-data-iterator :items="books" hide-default-footer hide-default-header>
                    <template v-slot:default="props">
                        <v-card v-for="b in props.books" :key="b.bookId">
                            <h1>{{b.title}}</h1>
                        </v-card>
                    </template>
                </v-data-iterator>        
            </v-container>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Books',
        data(){
        return {
            books:[],
        }
    },
    mounted(){
        const id = this.$route.params.id;
        axios.get(`/api/books/${id}`)
            .then((response) => {
                this.books = response.data[0]
            })
    }
}
</script>
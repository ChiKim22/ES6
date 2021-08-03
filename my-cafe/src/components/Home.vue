<template>
    <div id="app">
        <h1>Home</h1>
        <!-- <h2>Welcome {{ $store.state.user.userId }}</h2> -->
            
        <!-- Use Map -->
        <h2>Welcome {{ userId }}</h2>

        <v-text-field 
        v-model="newId" 
        type="text"
        color="success"
        loading
        ></v-text-field>
        <br>
        <v-btn @click="saveUserId">Save</v-btn>
        <v-btn @click="updateReviews">Update</v-btn>
        <!-- <h1>{{ $store.getters.reviewCount }}</h1> -->     
        <!-- Use Map -->
                <h1>{{ reviewCount }}</h1>
        <br>
        <!-- <ul v-for="r in $store.state.reviews.reviews" :key="r.id">
            <p>{{ r.body }}</p>
        </ul> -->
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="re in reviews" :key="re.id">
                        <td>{{re.email}}</td>
                        <td>{{re.body}}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    name:'Home',
    data(){
        return { newId:'' }
    },
    computed:{
        //namespace 가 설정되지 않은 경우
        ...mapState({
            userId:state=>state.user.userId
        }),
        //namespace 가 설정되어 있는 경우
        ...mapState('reviews', {
            reviews:state=>state.reviews
        }),
        ...mapGetters('reviews', ['reviewCount'])
    },
    methods:{
        ...mapMutations(['updateUserId']),
        ...mapActions('reviews', ['getReviews']),
        saveUserId() {
            // this.$store.commit('updateUserId', this.newId)
            //use map
            this.updateUserId(this.newId)
        },
        updateReviews() {
            // this.$store.dispatch('getReviews')
            //use map
            this.getReviews()
        }
    }
};
</script>
<template>
    <input type="text" class="input" :value="value" v-on="listeners">
</template>

<script>
export default {
    props: {
        value:{ type: String, default: '',}
    },
    computed: {
        listeners() {
        return {
            //자식(input) 에게서 부모에게 전달되는 모든 이벤트들
            ...this.$listeners,
            // input 이벤트만 재정의
            input: event => this.$emit('input', event.target.value)
         }
       }  
    }
}
</script>

<style scoped>
    .input {
        width:100%;
        padding: 8px 10px;
        border: 1px solid #32485F;
    }
</style>
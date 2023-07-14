<template>
<v-container>
    <h1>Vestuario de hombre</h1>
    <ProductsCards :productos=ropaH />
</v-container>
</template>

<script>
import ProductsCards from '@/components/ProductsCards.vue';

export default {
name: 'vestuario-hombre',
data(){
    return {
        ropaH: [],
    }
},
components:{
ProductsCards
},
mounted(){
    this.ropaH = this.$store.state.ropaH;
}
}
</script>

<style>

</style>
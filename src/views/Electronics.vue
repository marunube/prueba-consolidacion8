<template>
<v-container>
    <h1>Electronicos</h1>
    <products-cards-vue :productos="electronics" />
</v-container>
</template>

<script>
import ProductsCardsVue from '@/components/ProductsCards.vue';

export default {
    name:'electronics-view',
data(){
    return {
        electronics: [],
    }
},
components: {
    ProductsCardsVue
},
mounted(){
    this.electronics= this.$store.state.electronics;
}

}
</script>

<style>

</style>
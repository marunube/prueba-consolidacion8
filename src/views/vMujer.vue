<template>
  <v-container>
    <h1>Vestuario de Mujer</h1>
    <products-cards-vue :productos="ropaM" />
  </v-container>
</template>

<script>
import ProductsCardsVue from '@/components/ProductsCards.vue';

export default {
  name:'vestuario-mujer',
  data(){
    return {
        ropaM: [],
    }
},
components: {
  ProductsCardsVue
},
mounted(){
    this.ropaM = this.$store.state.ropaM;
}
}
</script>

<style>

</style>
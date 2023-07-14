<template>
  <v-container class="d-flex flex-row">
    <CheckOutFormVue />
    <carrito-vue />
  </v-container>
</template>

<script>
import CarritoVue from '@/components/Carrito.vue'
import CheckOutFormVue from '@/components/CheckOutForm.vue'


export default {
    name:'carrito-view',
    components:{
        CarritoVue,
        CheckOutFormVue
    },
}
</script>

<style>

</style>
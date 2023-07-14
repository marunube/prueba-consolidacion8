<template>
<v-container class="d-flex flex-row justify-space-between">
    <v-card :to="producto.ruta" class="grey lighten-3 " width="18.75rem" v-for="(producto, index) in tiposdeproductos" :key="index">
        <v-card-title class="text-uppercase">{{producto.name}}</v-card-title>
        <v-img class="mx-5 my-5 rounded-lg" height="18.75rem" :src="producto.image"></v-img>
        <p class="mx-5 my-5">{{producto.text}}</p>
    </v-card>
</v-container>
</template>

<script>
export default {
    name:'card-home',
    props: {
        tiposdeproductos: Array
    },

}
</script>

<style>

</style>
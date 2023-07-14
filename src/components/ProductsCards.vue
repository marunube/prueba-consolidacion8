<template>
<v-container class="d-flex flex-wrap flex-row justify-space-between">
    <v-card class="mx-5 my-5" width="18.75rem" v-for="(product, id) in productos" :key="id">
        <v-container>
        <v-card-title>{{product.title}}</v-card-title>
        </v-container>
        <v-container>
        <v-img class="px-3 py-3" width="15.625rem" :src="product.image"></v-img>
        </v-container>
        <v-container>
            <p>{{product.description}}</p>
        </v-container>        
        <v-container>
            <v-chip>${{product.price}}</v-chip>
        </v-container>
        <v-container>
            <v-btn class="success" @click="Agregar(product)">Agregar <v-icon>mdi-cart</v-icon></v-btn>
        </v-container>
    </v-card>
</v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name:'man-card',
    props: {
        productos: Array
    },
    methods: {
        ...mapActions(['agregarAlCarrito']),
        Agregar(product) {
            this.agregarAlCarrito(product);
            this.$router.push('carrito');
        }
    }

}
</script>

<style>

</style>
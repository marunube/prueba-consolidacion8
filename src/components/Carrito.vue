<template>
<v-container>
    <h1 >Carro</h1>
        <v-sheet width="37.5rem">
            
            <v-container class="mx-2 my-2">
            </v-container>
            <v-container width="50%" class="d-flex flex-row">
            <v-card  class="d-flex flex-column justify-center mx-3 my-3" v-for="(producto, index) in carrito" :key="index">
                <v-container>
                    <v-card-title class="font-weigth-light" >{{producto.title}} </v-card-title>
                </v-container>
                <v-container class="d-flex flex-row">
                    <v-container>
                        <v-img width="100px" height="100px" :src="producto.image"></v-img>
                    </v-container>
                    <v-container>
                        <v-btn @click="Eliminar(producto)"><v-icon>mdi-close</v-icon></v-btn>
                    </v-container>
                    
                </v-container>
                <v-container>
                    <v-chip class="grey">${{producto.price}}</v-chip>
                </v-container>
            </v-card>
            </v-container>
            <v-container class="d-flex flex-row">
                <h3>Subtotal</h3> <v-chip class="grey mx-2">${{total }}</v-chip>
            </v-container>
            <v-container class="d-flex flex-row">
                    <h2>Total</h2> <v-chip class="mx-2">${{total}}</v-chip> 
            </v-container>
            <v-container>
                <v-btn class="success mx-2 my-2" @click="Pagar()">Pagar</v-btn>
            </v-container>
        </v-sheet>
        <v-containe>
            <v-form>

            </v-form>
        </v-containe>
</v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name:'my-carrito',
    methods: {
        ...mapActions(['sacarDelCarrito','CleanCarrito']),
        Eliminar(product) {
            this.sacarDelCarrito(product);
        },
        Pagar(){
            this.$router.push('checkout');
            this.CleanCarrito();
        },
    },
    computed: {
        carrito: {
            get() {
                return this.$store.state.carrito
            }
        },
        total: {
            get() {
                return this.carrito.reduce((total, item) => total + item.price, 0);
            }
        }
    },
}
</script>

<style>

</style>
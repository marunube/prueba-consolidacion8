<template>
  <v-card-text>
    <v-form ref="CursoNuevo" class="px-3">
    <h1>Datos del comprador</h1>
      <v-text-field label="Nombre" v-model="nombre"> Nombre </v-text-field>
      <v-text-field label="Url" v-model="url">Url</v-text-field>
      <v-text-field label="Cupos" v-model="cupos" type="number">E-mail</v-text-field>
      <v-text-field type="number" v-model="inscritos" label="Inscritos">Repetir E-mail</v-text-field>
      <v-text-field type="number" v-model="duracion" label="duracion">Numero</v-text-field>
      <h1>Datos de despacho</h1>
      <v-text-field label="Fecha de inicio" v-model="fecha">Direccion</v-text-field>
      <v-text-field type="number" v-model="costo" label="Costo">Comuna</v-text-field>
      <v-btn class="warning mx-2" @click="Limpiar()">Limpiar Formulario</v-btn>
    </v-form>
  </v-card-text>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name:'checkout-form',
        methods: {
        ...mapActions(['sacarDelCarrito']),
        Eliminar(product) {
            this.sacarDelCarrito(product);
        },
    },
};
</script>

<style>
</style>
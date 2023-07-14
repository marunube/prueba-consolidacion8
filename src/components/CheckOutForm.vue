<template>
  <v-card-text>
    <v-form ref="CursoNuevo" class="px-3" lazy-validation>
      <h1>Datos del comprador</h1>
      <v-text-field label="Nombre" :rules="nameRules" :counter="20">
        Nombre
      </v-text-field>
      <v-text-field label="E-mail" type="mail" :rules="emailRules" >E-mail</v-text-field>
      <v-text-field label="Repetir E-mail" type="mail" :rules="emailRules"
        >Repetir E-mail</v-text-field
      >
      <v-text-field label="Numero" type="number">Numero</v-text-field>
      <h1>Datos de despacho</h1>
      <v-text-field label="Direccion">Direccion</v-text-field>
      <v-text-field label="Comuna" type="number">Comuna</v-text-field>
      <v-btn class="warning mx-2" @click="Limpiar()">Limpiar Formulario</v-btn>
    </v-form>
  </v-card-text>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "checkout-form",
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 20 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    ...mapActions(["sacarDelCarrito"]),
    Eliminar(product) {
      this.sacarDelCarrito(product);
    },
  },
};
</script>

<style>
</style>
<template>
  <nav>
    <v-toolbar flat app dark>
      <v-card flat app dark to="/">
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Inicio</span>
        </v-toolbar-title>
      </v-card>
      <v-spacer></v-spacer>
      <v-btn  class=" flat mx-2"  font-weight-ligth to="/vestuariohombre">Vestuario hombre</v-btn >
      <v-btn  class=" flat mx-2"  font-weight-ligth to="/vestuariomujer">Vestuario mujer</v-btn >
      <v-btn  class=" flat mx-2"  font-weight-ligth to="/electronicos">Electronicos</v-btn >
      <v-btn to="/carrito"><v-icon >mdi-cart</v-icon></v-btn>
    </v-toolbar>
  </nav>
</template>

<script>

export default {
    name:'my-navbar',
    components:{

    },
};
</script>

<style>
</style>
<template>
  <v-carousel v-model="model">
    <v-carousel-item v-for="(producto, i) in mejoresproductos" :key="i" :src="producto.image">
      <v-sheet height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">{{ producto.title }}</div>
          <v-img :src="producto.image" max-height="150" max-width="250" alt=""/>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    name:'my-carousel',
    props: {
        mejoresproductos: Array
    },
  data: () => ({

  }),
};
</script>

<style>
</style>
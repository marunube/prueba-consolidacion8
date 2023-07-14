<template>
  <v-container>
    <Carousel :mejoresproductos="homeItems.mejoresproductos"/>
    <v-container class="d-flex justify-center"> <h1>Nuestros productos</h1> </v-container>
    
    <CardHome :tiposdeproductos="homeItems.tiposproductos"/>
    <Footer />

  </v-container>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import CardHome from '@/components/HomeCard.vue'
import Footer from '@/components/Footer.vue';

export default {
  name: "my-Home",
  data() {
    return {
      homeItems: {},
    };
  },

  components: {
    Carousel,
    CardHome,
    Footer,
  },
  mounted() {
    this.homeItems = this.$store.state.homeItems;
  },
};
</script>

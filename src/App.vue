<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapActions } from 'vuex';

export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(['fetchHomeItems', 'fetchRopaHombre', 'fetchRopaMujer','fetchElectronics'])
  },
  created() {
    this.fetchHomeItems();
    this.fetchRopaHombre();
    this.fetchRopaMujer();
    this.fetchElectronics();
  }
};
</script>

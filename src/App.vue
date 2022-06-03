<template>
  <Navbar />
  <div class="container">
    <router-view />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Navbar
  },
  methods: {
    
    ...mapActions(['CargarLocalStorage']),
  },
  created() {
    this.CargarLocalStorage();
  },
}

</script>

<style>
</style>

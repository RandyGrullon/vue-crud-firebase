<template>
  <Navbar />
  <div class="container">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  },
}
</script>

<style>
</style>
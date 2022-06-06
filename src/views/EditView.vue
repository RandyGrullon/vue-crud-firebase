<template>
  <div>
    {{ tarea }}
    <form class="mt-3" @submit.prevent="updateTarea(tarea)">
      <Input :tarea="tarea" />
    </form>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Input from '@/components/Input.vue';
export default {
  computed: {
    ...mapState(["tarea"])
  },
  methods: {
    ...mapActions(["showTareas","updateTarea"]),
  },
  created() {
    this.showTareas(this.$route.params.id);
  },
  components: {
    Input
  }
}
</script>

<style>
</style> 
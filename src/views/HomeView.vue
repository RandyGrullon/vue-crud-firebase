<template>
  <Titulo texto="Formulario VUE.js" />
  <form @submit.prevent="ProcesarTarea">
   <Input :tarea="tarea"/>
  </form>
  <DataTable />
</template>

<script>
import Input from '../components/Input';
import { mapActions } from 'vuex';
import DataTable from '../components/DataTable';
import Titulo from '@/components/Titulo';


const shortid = require('shortid');

export default {
  name: 'HomeView',
  components: {
    Input,
    Titulo,
    DataTable
}, data() {
    return {
      tarea: {
        id: '',
        nombre: '',
        categoria: [],
        estado: '',
        numero: 0
      }
    }
  },
  methods:{
    ...mapActions(['setTareas']),
    ...mapActions(['Tareas']),

    ProcesarTarea(){
      console.log(this.tarea);
      if(this.tarea.nombre.trim() == '' ){
        console.log('El nombre no puede estar vacio');
        return;
      }
      console.log('Tarea Procesada');

      //generar ID
      this.tarea.id = shortid.generate();

      //enviar tarea
      this.setTareas(this.tarea);


      this.tarea = {
        id: '',
        nombre: '',
        categoria: [],
        estado: '',
        numero: 0
      }
    }
  }
}
</script>

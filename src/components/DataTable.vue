<template>
    <div>
        <table class="table table-striped table-hover ">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tareas" :key="item.id">
                    <th scope="row">{{ item.id }}</th>
                    <td>{{ item.nombre }}</td>
                    <td>{{ item.categoria.join(', ') }}</td>
                    <td>{{ item.estado }}</td>
                    <td>{{ item.numero}}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" @click="deleteTareas(item.id)">
                            Eliminar
                        </button>
                        <router-link :to="{
                            name: 'Edit',
                            params: {
                                id: item.id
                            }
                        }" class="btn btn-warning mx-2 btn-sm">
                            Edit
                        </router-link>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

import { mapState, mapActions } from 'vuex';

export default {
    
    computed: {
        ...mapState(['tareas'])
    },
    methods: {
        ...mapActions(['deleteTareas'])
    }




}

</script>
<style>
</style>
<template >
    <div>
        <!--input text -->
        <input type="text" class="form-control my-2" placeholder="Ingrese el nombre" v-model.trim="tarea.nombre" />
        <!--input checkbox -->
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="ReactJS"
                v-model="tarea.categoria">
            <label class="form-check-label" for="inlineCheckbox1">ReactJS</label>
        </div>

        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="VueJS"
                v-model="tarea.categoria">
            <label class="form-check-label" for="inlineCheckbox2">VueJS</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="AngularJS"
                v-model="tarea.categoria">
            <label class="form-check-label" for="inlineCheckbox2">AngularJS</label>
        </div>
        <!-- radio inline-->
        <div class="mt-2">
            <div class="form-check form-check-inline ">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                    v-model="tarea.estado" value="urgente">
                <label class="form-check-label" for="inlineRadio1">urgente</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                    v-model="tarea.estado" value="relax">
                <label class="form-check-label" for="inlineRadio2">relax</label>
            </div>
        </div>
        <!--input number -->
        <input type="number" class="form-control my-2" placeholder="Edad" v-model.number="tarea.numero" />


        <!--boton -->
        <button type="submit" :disabled="bloquear" class="btn btn-dark mt-3 mb-3 btn-block">Procesar</button>
    </div>
</template>
<script>
export default {
    props: {
        tarea: {
            type: Object,
            required: true
        },
    },
    computed: {
        bloquear() {
            return this.tarea.nombre.trim() === "" ? true : false
        }
    },
}
</script>
<style lang="">
    
</style> 
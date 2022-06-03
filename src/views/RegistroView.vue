<template>
    <div>
        <form @submit.prevent="procesarFormulario()" class="container  h-50">
            <div class="container py-2 h-50">
                <div class="row justify-content-center align-items-center h-50">
                    <div class="col-sm-9 col-lg-9 col-xl-5">
                        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
                            <div class="card-body p-4 p-md-5 m-auto">
                                <div class="d-flex justify-content-center">
                                    <h3 class="mb-3">Registration Form</h3>
                                </div>
                                    <div class="row">
                                        <div class="col-md-12 mb-4">

                                            <div class="form-outline">
                                                <input type="email" placeholder="Email"
                                                    class="form-control form-control-lg" v-model.trim="email" />
                                            </div>

                                        </div>
                                        <div class="col-sm-12 col-lg-12 col-xl-5  mb-4">

                                            <div class="form-outline">
                                                <input type="password" placeholder="Password"
                                                    class="form-control form-control-lg" v-model.trim="password" />
                                            </div>

                                        </div>
                                    </div>


                                    <div class="row">
                                        <div class="col-lg-12 mb-4 pb-2">

                                            <div class="form-outline">
                                                <input type="password" placeholder="Password"
                                                    class="form-control form-control-lg" v-model.trim="password2" />
                                            </div>

                                        </div>
                                    </div>

                                    <div class="d-flex justify-content-center mw-100">
                                        <button class="btn btn-dark btn-block" :disabled="bloquear"
                                            type="submit">Registrar</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import Titulo from '@/components/Titulo.vue'
import { mapActions } from 'vuex'
export default {
    components: { Titulo },
    data() {
        return {
            email: '',
            password: '',
            password2: ''
        }
    },
    computed: {
        bloquear() {
            if (!this.email.includes('@')) {
                return true
            }
            if (this.password.length > 5 && this.password === this.password2) {
                return false
            }
            return true

        }
    },
    methods: {
        ...mapActions(['registrarUsuario']),
        procesarFormulario(){
            this.registrarUsuario({
                email: this.email,
                password: this.password
            })
            this.email = ''
            this.password = ''
            this.password2 = ''
    
        }
         
    }

}
</script>
<style>
</style>
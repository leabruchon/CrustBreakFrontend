<template>
    <q-layout >
        <q-page class = "q-pa-md">
            <div class = "sign-up-title">
                <h6 class="text-center">Inscription</h6>
            </div>
    
            <div class = "sign-up-form-container">
                <q-form 
                @submit.prevent="submitForm"
                >
                    <q-input
                    outlined
                    v-model="form.name"
                    label="Nom d'utilisateur"
                    class="q-my-md"
                    label-color = "negative"   
                    color = "warning"
                    bg-color="positive"
                    :rules="[ val => val.length >= 4 || 'Minimum 4 caractère']"
                    />

                    <q-input
                    outlined
                    v-model="form.email"
                    label="E-mail"
                    class="q-my-md"
                    label-color = "negative"   
                    color = "warning"
                    bg-color="positive"
                    :rules="[val => validateEmail(val) || 'Email invalide']"
                    />

                    <q-input
                    type="password"
                    outlined
                    v-model="form.password"
                    label="Mot de passe"
                    class="q-my-md"
                    label-color = "negative"   
                    color = "warning"
                    bg-color="positive"
                    :rules="[ val => val.length >= 4 || 'Minimum 4 caractère']"
                    lazy-rules
                    />

                    <q-input
                    type="password"
                    outlined
                    v-model="form.password_confirmation"
                    label="Confirmer le mot de passe"
                    class="q-my-md"
                    label-color = "negative"   
                    color = "warning"  
                    bg-color="positive"            
                    :rules="[ val => val === form.password || 'Les mots de passe sont différents']"
                    lazy-rules
                    />

                    <q-btn
                    type="submit"
                    color="warning"
                    class = "text-capitalize "
                    label="Inscription"
                    />
                </q-form>
            </div>
        </q-page>
    </q-layout>
    
  
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InscriptionPage',

  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    submitForm () {
      alert('Formulaire envoyé !')
    },
    validateEmail (email) {
      // Source : https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    }
  }
})
</script>

<style lang="scss">
    .q-field__messages{
        color: $positive;
    }

    h6{
        color: $positive;
    }

   
</style>
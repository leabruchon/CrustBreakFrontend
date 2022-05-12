<template>
  
  <q-layout >
        <q-page class = "q-pa-md">
            <div class = "log-in-title">
                <h6 class="text-center">Connexion</h6>
            </div>
    
            <div class = "log-in-form-container">
                <q-form 
                @submit.prevent="submitForm"
                >
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

                    <q-btn
                    type="submit"
                    color="warning"
                    class = "text-capitalize "
                    label="Connexion"
                    />
                </q-form>
            </div>
        </q-page>
    </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ConnexionPage',

  data () {
    return {
      form: {
        email: '',
        password: '',
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
        margin: 0;
    }
</style>
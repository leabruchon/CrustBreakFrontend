<template>
  <q-layout>
    <q-page class="q-pa-md">
      <div class="log-in-title">
        <h6 class="text-center">Connexion</h6>
      </div>

      <div class="log-in-form-container">
        <q-form @submit.prevent="submitForm">
          <q-input
            outlined
            v-model="form.email"
            label="E-mail"
            class="q-my-md"
            label-color="negative"
            color="warning"
            bg-color="positive"
            :rules="[(val) => validateEmail(val) || 'Email invalide']"
          />

          <q-input
            type="password"
            outlined
            v-model="form.password"
            label="Mot de passe"
            class="q-my-md"
            label-color="negative"
            color="warning"
            bg-color="positive"
            :rules="[(val) => val.length >= 4 || 'Minimum 4 caractère']"
            lazy-rules
          />

          <q-item to="/inscription">
                <q-item-main label="inscription-router" class= "text">Vous n'avez pas de compte ? <span style="text-decoration: underline;">Inscrivez vous !</span></q-item-main>
          </q-item>

          <div class="submit-btn">
            <q-btn
            type="submit"
            color="warning"
            class="text-capitalize"
            label="Connexion"
            />
          </div>
          
        </q-form>
      </div>
    </q-page>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "../../utils/api";
import { SessionStorage } from "quasar";

export default defineComponent({
  name: "ConnexionPage",

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async submitForm() {
      const API = new api();

      const valeur = await API.checkUserCanSignIn(
        this.form.email,
        this.form.password
      );

      if (valeur["code"] == 1) {
        const user = valeur["user"];

        SessionStorage.set("user", user.getid());
        this.$router.push({ name: "home" });
      } else alert(valeur["message"]);
    },

    validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
});
</script>

<style lang="scss">
  .q-field__messages {
    color: $positive;
  }

  h6 {
    color: $positive;
    margin: 0;
  }

  .submit-btn{
      display: flex;
      justify-content: center;
  }

  .q-item{
        display: flex;
    justify-content: center;
  } 
  
  .text{
    color: white;
    font-size: 12px;
  }
</style>

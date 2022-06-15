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
            <q-item-main label="inscription-router" class="text"
              >Vous n'avez pas de compte ?
              <span style="text-decoration: underline"
                >Inscrivez vous !</span
              ></q-item-main
            >
          </q-item>

          <div class="submit-btn">
            <q-btn
              type="submit"
              color="warning"
              class="text-capitalize"
              label="Connexion"
            />
          </div>
          <div class="conteneur">
            <div class="lds-ring" style="display: none">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
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
      let elemLoad = document.querySelector(".lds-ring");
      elemLoad.style.display = "block";

      const valeur = await API.checkUserCanSignIn(
        this.form.email,
        this.form.password
      );
      elemLoad.style.display = "none";
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
.conteneur {
  margin: 10%;
  display: flex;
  justify-content: center;
}
.submit-btn {
  display: flex;
  justify-content: center;
}

.q-item {
  display: flex;
  justify-content: center;
}

.text {
  color: white;
  font-size: 12px;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

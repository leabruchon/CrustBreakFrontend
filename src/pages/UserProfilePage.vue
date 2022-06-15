<template>
  <div>
    <q-btn
      class="ButtonClassic"
      :ripple="{ center: true }"
      rounded
      icon="favorite"
      color="warning"
      label="Consulter mes recettes favorites"
      no-caps
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "../utils/api";
import { SessionStorage } from "quasar";

export default defineComponent({
  name: "FavoriteButton",

  async mounted() {
    const API = new api();
    
    const user = await API.getUserFromId(SessionStorage.getItem("user")); 
    console.log(user._firstname)
  },

});
</script>

<style lang="scss">
.ButtonClassic {
  padding: 8px;
}
</style>
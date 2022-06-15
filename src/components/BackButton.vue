<template>
  <div class = "btn">
      <q-item to="/">
        <q-btn
        class="ButtonClassic"
        :ripple="{ center: true }"
        rounded
        icon="arrow_back"
        color="warning"
        no-caps
        />
      </q-item>
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

.btn{
    padding-bottom: 15px;
    display: flex;
}
</style>
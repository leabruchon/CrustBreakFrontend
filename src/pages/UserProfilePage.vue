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

export default defineComponent({
  name: "FavoriteButton",

});
</script>

<style lang="scss">
.ButtonClassic {
  padding: 8px;
}
</style>
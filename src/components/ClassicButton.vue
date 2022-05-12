<template>
  <div>
    <q-btn
      class="ButtonClassic"
      :ripple="{ center: true }"
      rounded
      color="warning"
      label="Outline Rounded"
      no-caps
    />
    <!--
      Chercher comment faire pour que le label soit une variable
      -->
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClassicButton",
});
</script>

<style lang="scss">
.ButtonClassic {
  padding: 8px;
}
</style>

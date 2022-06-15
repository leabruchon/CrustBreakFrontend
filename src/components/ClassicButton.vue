<template>
  <div>
    <q-btn
      class="ButtonClassic"
      :ripple="{ center: true }"
      rounded
      color="warning"
      v-bind:label="this.BtnLabel"
      no-caps
    />

    <!--
      Chercher comment faire pour que le label soit une variable TESTTTTTT OM ALLLEE
      -->
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClassicButton",
  props: {
    BtnLabel: {
      type: String,
      required: true,
      default: "ButtonLabel",
    },
  },
});
</script>

<style lang="scss">
.ButtonClassic {
  padding: 8px;
}
</style>

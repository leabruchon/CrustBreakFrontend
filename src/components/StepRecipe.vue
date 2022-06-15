<template>
  <div class="backgroundRecipe q-mx-md q-px-md">
    <h1 class="text-h4">Étape {{ title }}</h1>

    <p>{{ consigne }}</p>

    
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "StepRecipe",
  props: {
    consigne: String,
    title: Number,
  },
});
</script>

<style lang="scss">
.backgroundRecipe {
  background-color: $secondary;
  border-radius: 12px;
  color: white;

  margin-top: 2vh;
}

.pTitre {
  font-size: 18px;
}
</style>

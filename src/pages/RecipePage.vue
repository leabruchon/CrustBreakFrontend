<template>
  <q-page class="flex flex-center">
    <IntroRecipe
      :title="titreRecette"
      :image="imageRecette"
      :time="tempsRecette"
      nbPerson="3"
    />

    <StepRecipe
      title="Step 1"
      consigne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis eu at lacus aliquam amet libero. Vulputate est non diam cursus malesuada. Eget montes.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis eu at lacus aliquam amet libero. Vulputate est non diam cursus malesuada. Eget montes."
    />

    <StepRecipe
      title="Step 2"
      consigne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis eu at lacus aliquam amet libero. Vulputate est non diam cursus malesuada. Eget montes.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis eu at lacus aliquam amet libero. Vulputate est non diam cursus malesuada. Eget montes."
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import IntroRecipe from "src/components/IntroRecipe.vue";
import StepRecipe from "src/components/StepRecipe.vue";
import { api } from "../utils/api.js";

export default defineComponent({
  name: "RecipePage",
  components: {
    IntroRecipe,
    StepRecipe,
  },
  data() {
    return {
      recette_detaillee: null,
      titreRecette: "",
      tempsRecette: "",
      imageRecette: "",
    };
  },
  async mounted() {
    recette_id_to_search = Number(
      this.$router.currentRoute._value.params["RecetteID"]
    );
    const API = new api();
    const recette = await API.getRecipeDetails(
      recette_id_to_search === undefined ||
        recette_id_to_search === {} ||
        recette_id_to_search === null
        ? 479101
        : recette_id_to_search
    );
    this.recette_detaillee = recette;
    this.titreRecette = recette._title;
    this.tempsRecette = recette._readyInMinutes;
    this.imageRecette = recette._image;

    console.log(this.imageRecette);
  },
});
</script>

<template>
  <q-page class="flex flex-center">
    <IntroRecipe
      :title="titreRecette"
      :image="imageRecette"
      :time="tempsRecette"
      :ingredients="ingredientsRecette"
      :equipements="equipementRecette"
    />


    <div v-for="step in etapesList" :key="step._id" class = steps-recipe>
      <StepRecipe
      :title="step.id"
      :consigne="step.step"
      />
    </div>
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
      ingredientsRecette: [0]['name'],
      equipementRecette: null,
      etapesRecettes: null,
      etapesList: null
    };
  },
  async mounted() {
    const recette_id_to_search =
      this.$router.currentRoute._value.params["RecetteID"] === undefined ||
      this.$router.currentRoute._value.params["RecetteID"] === {} ||
      this.$router.currentRoute._value.params["RecetteID"] === null
        ? 479101
        : Number(this.$router.currentRoute._value.params["RecetteID"]);
    const API = new api();
    const recette = await API.getRecipeDetails(recette_id_to_search);
    this.recette_detaillee = recette;
    this.titreRecette = recette._title;
    this.tempsRecette = recette._readyInMinutes;
    this.imageRecette = recette._image;
    this.ingredientsRecette = recette._ingredientList
    this.equipementRecette = recette._equipment
    this.etapesRecette = recette._analyzedInstructions
    this.etapesList = []

    this.etapesRecette[0]['steps'].forEach((element) => {
      this.etapesList.push({
        id: element.number,
        step: element.step,
      })
    })

     console.log(this.etapesList)

    console.log(this.etapesRecette[0]['steps']);
  },
});
</script>

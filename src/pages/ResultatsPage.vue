<template>
  <div v-for="recipe in ListRecettes" :key="recipe._id">
    <CardRecipe
      RecetteID="Test"
      RecetteImg="https://spoonacular.com/recipeImages/639465-556x370.jpg"
      :RecetteTitle="recipe._title"
      RecetteLiked="true"
    />
  </div>
</template>

<script>
window.onload = function () {};
import { defineComponent, onMounted } from "vue";

import CardRecipe from "src/components/CardRecipe.vue";
import { api } from "../utils/api";

export default defineComponent({
  name: "IndexPage",

  data() {
    return {
      recipes: null,
      ListRecettes: null,
    };
  },

  methods: {},

  async mounted() {
    const API = new api();
    const recipes = await API.get6RandomRecipes();
    this.recipes = recipes;
    console.log(recipes);
    this.ListRecettes = [];
    recipes.forEach((element) => {
      console.log(element._id);
      this.ListRecettes.push({
        _id: element._id,
        _title: element._title,
      });
    });

    console.log(this.ListRecettes);
  },
  components: {
    CardRecipe,
  },
});
</script>

<style lang="scss"></style>

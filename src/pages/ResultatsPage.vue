<template>
  <div class="conteneur">
    <div class="Column">
      <div v-for="recipe in firstHalf" :key="recipe._id">
        <CardRecipe
          :RecetteID="recipe._id"
          :RecetteImg="recipe._image"
          :RecetteTitle="recipe._title"
        />
        <div class="separator"></div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="Column">
      <div v-for="recipe in secondHalf" :key="recipe._id" class="Card">
        <CardRecipe
          :RecetteID="recipe._id"
          :RecetteImg="recipe._image"
          :RecetteTitle="recipe._title"
        />
        <div class="separator"></div>
      </div>
    </div>
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
      firstHalf: null,
      secondHalf: null,
    };
  },

  methods: {
    twoHalfList() {
      console.log("coucuo");
      for (var i = 0; i < this.ListRecettes.length; i++) {
        const half = Math.ceil(this.ListRecettes.length / 2);
        this.firstHalf = this.ListRecettes.splice(0, half);
        this.secondHalf = this.ListRecettes.splice(-half);
      }
    },
  },

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
        _image: element._image,
      });
    });
    this.twoHalfList();
    console.log(this.ListRecettes);
  },

  components: {
    CardRecipe,
  },
});
</script>

<style lang="scss">
.conteneur {
  display: flex;
  justify-content: center;
}

.Column {
  display: flex;
  flex-direction: column;
}

.separator {
  height: 10px;
  width: 10px;
}
</style>

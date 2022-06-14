<template>
  <q-page class="flex flex-center PageIndex">
    <div class="top-bar">
      <SearchBar />
      <FilterButton />
      <q-icon class="user" name="account_circle" />
    </div>
    <div class="spinner-generation">
      <SpinnerGenerateRecipe @NbRecette="TakeNbRecFromChild" />
    </div>
    <div class="recipes">
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
    </div>
  </q-page>
</template>

<script>
window.onload = function () {};
import { defineComponent, onMounted } from "vue";
import SpinnerGenerateRecipe from "src/components/SpinnerGenerateRecipe.vue";
import FilterButton from "src/components/FilterButton.vue";
import SearchBar from "src/components/SearchBar.vue";
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
      recettes: null,
    };
  },

  methods: {
    ChangeStateLike(IdRecette) {
      console.log("LogParent Id Recette : " + IdRecette);
    },
    TakeNbRecFromChild(NbRecChild) {
      console.log("LogParent Nb Recettes : " + NbRecChild);
    },

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
    console.log(recipes);
    this.recipes = recipes;
    this.ListRecettes = [];
    recipes.forEach((element) => {
      console.log(element._id);
      this.ListRecettes.push({
        _id: element._id,
        _title: element._title,
        _image: element._image,
      });
    });
    console.log(this.ListRecettes);
    this.twoHalfList();
  },

  components: {
    FilterButton,
    SearchBar,
    CardRecipe,
    SpinnerGenerateRecipe,
  },
});
</script>

<style lang="scss">
.PageIndex {
  align-content: flex-start;
}
.top-bar {
  display: flex;
  width: 100%;
  align-items: center;
  align-content: flex-start;
  justify-content: space-evenly;
  margin-top: 18px;
}

.spinner-generation {
  display: flex;
  justify-content: center;
  margin: 24px;
}
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

.user {
  color: $positive;
  size: 10rem;
}
</style>

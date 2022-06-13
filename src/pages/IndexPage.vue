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
      <div class="rowReciepes">
        <div class="reciepe">
          <CardRecipe
            @AddToLike="ChangeStateLike"
            :RecetteID="rID1"
            :RecetteTitle="rN1"
            :RecetteImg="rImg1"
            :RecetteLiked="rL1"
          />
        </div>
        <div class="reciepe">
          <CardRecipe
            @AddToLike="ChangeStateLike"
            :RecetteID="rID2"
            :RecetteTitle="rN2"
            :RecetteImg="rImg2"
            :RecetteLiked="rL2"
          />
        </div>
      </div>
      <div class="rowReciepes">
        <div class="reciepe">
          <CardRecipe
            @AddToLike="ChangeStateLike"
            :RecetteID="rID3"
            :RecetteTitle="rN3"
            :RecetteImg="rImg3"
            :RecetteLiked="rL3"
          />
        </div>
        <div class="reciepe">
          <CardRecipe
            @AddToLike="ChangeStateLike"
            :RecetteID="rID4"
            :RecetteTitle="rN4"
            :RecetteImg="rImg4"
            :RecetteLiked="rL4"
          />
        </div>
      </div>
      <div class="rowReciepes">
        <div class="reciepe">
          <CardRecipe
            @AddToLike="ChangeStateLike"
            :RecetteID="rID5"
            :RecetteTitle="rN5"
            :RecetteImg="rImg5"
            :RecetteLiked="rL5"
          />
        </div>
        <div class="reciepe">
          <CardRecipe
            @AddToLike="ChangeStateLike"
            :RecetteID="rID6"
            :RecetteTitle="rN6"
            :RecetteImg="rImg6"
            :RecetteLiked="rL6"
          />
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
      recettes: null,
      rID1: "null",
      rN1: "null",
      rImg1: "https://spoonacular.com/recipeImages/639465-556x370.jpg",
      rL1: false,
      rID2: "null",
      rN2: "null",
      rImg2: "https://spoonacular.com/recipeImages/639465-556x370.jpg",
      rL2: false,
      rID3: "null",
      rN3: "null",
      rImg3: "https://spoonacular.com/recipeImages/639465-556x370.jpg",
      rL3: false,
      rID4: "null",
      rN4: "null",
      rImg4: "https://spoonacular.com/recipeImages/639465-556x370.jpg",
      rL4: false,
      rID5: "null",
      rN5: "null",
      rImg5: "https://spoonacular.com/recipeImages/639465-556x370.jpg",
      rL5: false,
      rID6: "null",
      rN6: "null",
      rImg6: "https://spoonacular.com/recipeImages/639465-556x370.jpg",
      rL6: false,
    };
  },

  methods: {
    ChangeStateLike(IdRecette) {
      console.log("LogParent Id Recette : " + IdRecette);
    },
    TakeNbRecFromChild(NbRecChild) {
      console.log("LogParent Nb Recettes : " + NbRecChild);
    },
  },

  async mounted() {
    const API = new api();
    const recipes = await API.get6RandomRecipes();
    console.log(recipes);

    for (var i = 0; i < 6; i++) {
      console.log(i);
      if (i == 0) {
        this.rN1 = recipes[i]._title;
        this.rID1 = recipes[i]._ID;
        this.rImg1 = recipes[i]._image;
        console.log(recipes[i]._title);
      }
      if (i == 1) {
        this.rN2 = recipes[i]._title;
        this.rID2 = recipes[i]._ID;
        this.rImg2 = recipes[i]._image;
        console.log(recipes[i]._title);
      }
      if (i == 2) {
        this.rN3 = recipes[i]._title;
        this.rID3 = recipes[i]._ID;
        this.rImg3 = recipes[i]._image;
        console.log(recipes[i]._title);
      }
      if (i == 3) {
        this.rN4 = recipes[i]._title;
        this.rID4 = recipes[i]._ID;
        this.rImg4 = recipes[i]._image;
        console.log(recipes[i]._title);
      }
      if (i == 4) {
        this.rN5 = recipes[i]._title;
        this.rID5 = recipes[i]._ID;
        this.rImg5 = recipes[i]._image;
        console.log(recipes[i]._title);
      }
      if (i == 5) {
        this.rN6 = recipes[i]._title;
        this.rID6 = recipes[i]._ID;
        this.rImg6 = recipes[i]._image;
        console.log(recipes[i]._title);
      }
    }
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

.recipes {
  display: flex;
  flex-direction: column;
}

.rowReciepes {
  display: flex;
  flex-direction: row;
}

.reciepe {
  margin: 2%;
}

.user {
  color: $positive;
  size: 10rem;
}
</style>

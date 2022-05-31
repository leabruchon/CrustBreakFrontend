<template>
  <q-page class="flex flex-center">
    <div class="top-bar">
      <SearchBar />
      <FilterButton />
      <q-icon class="user" name="account_circle" />
    </div>
    <div class="spinner-generation">
      <SpinnerGenerateRecipe @NbRecette="TakeNbRecFromChild" />
    </div>
    <div class="recipes">
      <CardRecipe @AddToLike="ChangeStateLike" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import SpinnerGenerateRecipe from "src/components/SpinnerGenerateRecipe.vue";
import FilterButton from "src/components/FilterButton.vue";
import SearchBar from "src/components/SearchBar.vue";
import CardRecipe from "src/components/CardRecipe.vue";

export default defineComponent({
  name: "IndexPage",

  methods: {
    ChangeStateLike(IdRecette) {
      console.log("LogParent Id Recette : " + IdRecette);
    },
    TakeNbRecFromChild(NbRecChild) {
      console.log("LogParent Nb Recettes : " + NbRecChild);
    },
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
.top-bar {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
}

.spinner-generation {
  display: flex;
  justify-content: center;
}

.user {
  color: $positive;
  size: 10rem;
}
</style>

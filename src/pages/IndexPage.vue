<template>
  <q-page class="flex flex-center">
    <CardRecipe @AddToLike="ChangeStateLike" />
    <SpinnerGenerateRecipe @NbRecette="TakeNbRecFromChild" />
    <FilterButton />

    <SearchBar />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import SpinnerGenerateRecipe from "src/components/SpinnerGenerateRecipe.vue";
import FilterButton from "src/components/FilterButton.vue";
import SearchBar from "src/components/SearchBar.vue";
import CardRecipe from "src/components/CardRecipe.vue";

//checkbox
import { ref } from "vue";
import { api } from "src/utils/api";

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
    SpinnerGenerateRecipe,
    CardRecipe,
  },
});
</script>

<template>
  <q-page class="flex flex-center">
    <CardRecipe />
    <SpinnerGenerateRecipe />
    <FilterButton />

    <SearchBar />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import SpinnerGenerateRecipe from "src/components/SpinnerGenerateRecipe.vue";
import FilterButton from "src/components/FilterButton.vue";
import SearchBar from "src/components/SearchBar.vue";
<<<<<<< HEAD
import CardRecipe from "src/components/CardRecipe.vue";
=======

//checkbox
import { ref } from "vue";
import { api } from "src/utils/api";
>>>>>>> c4000f04cf66812db3d6a5bfa6a9437bd65c6321

export default defineComponent({
  name: "IndexPage",

  components: {
    FilterButton,
    SearchBar,
    SpinnerGenerateRecipe,
    CardRecipe,
  },
});
</script>

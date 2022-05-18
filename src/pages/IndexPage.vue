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
import CardRecipe from "src/components/CardRecipe.vue";

//checkbox
import { ref } from "vue";
import { api } from "src/utils/api";

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

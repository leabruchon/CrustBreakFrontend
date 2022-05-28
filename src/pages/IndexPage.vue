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

export default defineComponent({
  name: "IndexPage",

  components: {
    FilterButton,
    SearchBar,
    CardRecipe,
    SpinnerGenerateRecipe
  }
});
</script>

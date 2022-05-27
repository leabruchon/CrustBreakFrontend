<template>
  <q-page class="flex flex-center">
    <SearchBar/>
    <FilterButton/>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import FilterButton from "src/components/FilterButton.vue";
import SearchBar from "src/components/SearchBar.vue";

export default defineComponent({
  name: "IndexPage",

  components: {
    FilterButton,
    SearchBar
  }
});
</script>

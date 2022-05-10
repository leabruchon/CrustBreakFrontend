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

//checkbox
import { ref } from "vue";
import { api } from "src/utils/api";

export default defineComponent({
  name: "IndexPage",

  components: {
    FilterButton,
    SearchBar
  },
});
</script>

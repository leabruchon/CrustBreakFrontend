<template>
  <q-page class="flex flex-center">
    <ClassicButton />
    <FilterButton />
    <SearchBar />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import FilterButton from "src/components/FilterButton.vue";
import SearchBar from "src/components/SearchBar.vue";
import ClassicButton from "src/components/ClassicButton.vue";

export default defineComponent({
  name: "IndexPage",

  components: {
    ClassicButton,
    FilterButton,
    SearchBar,
  },
});
</script>

<template>
  <q-page class="flex flex-center">
    <FilterButton />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import FilterButton from "src/components/FilterButton.vue";
import { api } from "src/utils/api";
//checkbox
import { ref } from "vue";

export default defineComponent({
  name: "IndexPage",

  components: {
    FilterButton,
  },

  async setup() {
    const API = new api();
    const recette = await API.getRecipeDetails(479101);
    console.log(recette._title);
    return {
      val: ref(true),
    };
  },
});
</script>

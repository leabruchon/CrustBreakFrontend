<template>
  <q-page class="flex flex-center">
    <FilterButton />
    <ButtonDiscoverRecipes />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import FilterButton from "src/components/FilterButton.vue";
import ButtonDiscoverRecipes from "src/components/ButtonDiscoverRecipes.vue";

//checkbox
import { ref } from "vue";

export default defineComponent({
  name: "IndexPage",

  components: {
    FilterButton,
    ButtonDiscoverRecipes,
  },

  setup() {
    return {
      val: ref(true),
    };
  },
});
</script>

<template>
  <q-page class="flex flex-center">
    <FilterButton />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import FilterButton from "src/components/FilterButton.vue";
//checkbox
import { ref } from "vue";
import { api } from "src/utils/api";

export default defineComponent({
  name: "IndexPage",

  components: {
    FilterButton,
  },

  async setup() {
    return {
      val: ref(true),
    };
  },
});
</script>

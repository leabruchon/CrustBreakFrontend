<template>
  <q-page class="flex flex-center">
    <FilterButton />
    <ClassicButton />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import FilterButton from "src/components/FilterButton.vue";

//checkbox
import ClassicButton from "src/components/ClassicButton.vue";

export default defineComponent({
  name: "IndexPage",

  components: {
    FilterButton,
    ClassicButton,
  },

  async setup() {
    return {
      val: ref(true),
    };
  },
});
</script>

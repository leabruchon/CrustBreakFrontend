<template>
  <q-page class="flex flex-center">
    <ResearchBar />
    <FilterButton />
    <ButtonCParti />
    <ButtonDiscoverRecipes />
    <CardReceipe1 />
    <CardReceipe2 />
    <CardReceipe3 />
    <CardReceipe4 />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import ResearchBar from "src/components/ResearchBar.vue";
import FilterButton from "src/components/FilterButton.vue";
import ButtonCParti from "src/components/ButtonCParti.vue";
import ButtonDiscoverRecipes from "src/components/ButtonDiscoverRecipes.vue";
import CardReceipe1 from "src/components/CardReceipe1.vue";
import CardReceipe2 from "src/components/CardReceipe2.vue";
import CardReceipe3 from "src/components/CardReceipe3.vue";
import CardReceipe4 from "src/components/CardReceipe4.vue";

//checkbox
import { ref } from "vue";

export default defineComponent({
  name: "IndexPage",

  components: {
    ResearchBar,
    FilterButton,
    ButtonDiscoverRecipes,
    ButtonCParti,
    CardReceipe1,
    CardReceipe2,
    CardReceipe3,
    CardReceipe4,
  },

  setup() {
    return {
      val: ref(true),
    };
  },
});
</script>

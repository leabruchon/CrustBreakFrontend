<template>
  <q-page class="flex flex-center">
    <FilterButton />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import FilterButton from "src/components/FilterButton.vue";
import { api } from "src/utils/api";
import { User } from "src/utils/User";
//checkbox
import { ref } from "vue";

export default defineComponent({
  name: "IndexPage",

  components: {
    FilterButton,
  },

  async setup() {
    const connected_user = new User(
      2,
      "Baptiste",
      "Zloch",
      "2000-03-17",
      "b.zloch@hotmail.fr",
      "password",
      { sugar: "yes" }
    );
    console.log(connected_user);
    await connected_user.addTodoRecipe(
      1119161,
      "Lentil Burgers",
      new Date(2022, 4, 17)
    );
    console.log(await connected_user.getUserTodoRecipes());

    return {
      val: ref(true),
    };
  },
});
</script>

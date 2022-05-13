<template>
  <div>TA MERE</div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { api } from "../utils/api";

export default defineComponent({
  name: "CardRecipe",

  data() {
    return { MyRecipe: null };
  },

  async mounted() {
    const API = new api();
    const data = await API.searchRecipe("burger");
    this.MyRecipe = data[0];
    console.log(data[0]);
  },
});
</script>

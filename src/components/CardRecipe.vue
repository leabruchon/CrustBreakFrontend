<template>
  <div class="card">
    <img :src="LinkImg" />
    <div class="bottom">{{ RecetteTitle }}</div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { api } from "../utils/api";

export default defineComponent({
  name: "CardRecipe",

  data() {
    return {
      RecetteTitle: "",
      LinkImg: "",
      RecetteLiked: "",
    };
  },

  async mounted() {
    const API = new api();
    const data = await API.searchRecipe("burger");
    this.MyRecipe = data[0];
    console.log(data[0]);
    console.log(this.MyRecipe._id);
    this.RecetteTitle = this.MyRecipe._title;
    this.LinkImg = this.MyRecipe._image;
  },
});
</script>

<style lang="scss">
.card {
  overflow: hidden;
  width: 40%;
  background-color: white;
  border-radius: 16px;
}

img {
  width: 100%;
  height: auto;
  max-width: 100%;
}

.bottom {
  font-weight: 800;
  margin: 4px;
  height: 2rem;
}
</style>

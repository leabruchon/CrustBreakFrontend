<template>
  <div class="card">
    <div class="container">
      <img src="../assets/492564-312x231.jpg" /><span
        class="material-icons md-inactive iconLike"
        >favorite</span
      >
    </div>
    <div class="bottom">Exemple nom de recette long sur deux lignes</div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import "material-icons/iconfont/material-icons.css";
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
    //const API = new api();
    //const data = await API.searchRecipe("burger");
    //this.MyRecipe = data[0];
    //console.log(data[0]);
    //this.RecetteTitle = this.MyRecipe._title;
    //this.LinkImg = this.MyRecipe._image;
    //console.log(this.MyRecipe._image);
    // mettre les variables dans le code :src
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
  line-height: 0.8rem;
}

.iconLike {
  position: absolute;
  top: 5%;
  right: 5%;
  font-size: 2rem;
}
.container {
  position: relative;
}
</style>

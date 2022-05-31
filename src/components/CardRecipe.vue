<template>
  <div class="card">
    <div class="container">
      <img :src="RecetteImg" /><span
        v-on:click="ClickLike(this.RecetteID)"
        id="Icon"
        class="material-icons-outlined md-inactive iconLike"
        >favorite</span
      >
    </div>
    <div class="bottom">{{ RecetteTitle }}</div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import "material-icons/iconfont/material-icons.css";

export default defineComponent({
  name: "CardRecipe",

  props: {
    RecetteID: {
      type: String,
      required: true,
      default: "000000",
    },
    RecetteTitle: {
      type: String,
      required: true,
      default: "Nom Recette un peu long",
    },
    RecetteImg: {
      type: String,
      required: true,
      default: "https://spoonacular.com/recipeImages/639465-556x370.jpg",
    },
    RecetteLiked: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  data() {
    return {};
  },

  methods: {
    LikedState() {
      if (this.RecetteLiked == false) {
        document.getElementById("Icon").style.color = "grey";
        console.log("Not liked");
      }
      if (this.RecetteLiked == true) {
        document.getElementById("Icon").style.color = "red";
      }
    },

    ClickLike(Recette_ID) {
      console.log("Log enfant Id Recette : " + Recette_ID);
      this.$emit("AddToLike", Recette_ID);
    },
  },

  mounted() {
    this.LikedState();
  },
});
</script>

<style lang="scss">
.card {
  overflow: hidden;
  width: 40%;
  background-color: white;
  border-radius: 16px;

  width: min-content;
}

img {
  width: 128px;
  height: auto;
  max-width: 100%;
}

.bottom {
  font-weight: 800;
  margin-left: 4px;
  margin-right: 0px;
  height: 2rem;
  line-height: 0.8rem;
  width: 124px;
}

.iconLike {
  position: absolute;
  top: 5%;
  right: 5%;
  font-size: 2rem;
}
.container {
  position: relative;
  display: inline-block;
}
</style>

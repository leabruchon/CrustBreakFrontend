<template>
  <div class="card">
    <div class="container">
      <img :src="RecetteImg" /><span
        v-on:click="ClickLike(this.RecetteID, RecetteTitle)"
        class="material-icons-outlined md-inactive iconLike"
        v-bind:style="{ color: colorLike }"
        >favorite</span
      >
    </div>
    <div class="bottom" v-on:click="ClickName(this.RecetteID)">
      {{ RecetteTitle }}
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import "material-icons/iconfont/material-icons.css";
import { User } from "../utils/User";
import { SessionStorage } from "quasar";
import { api } from "../utils/api";

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
    return {
      colorLike: "grey",
      user_connected: null,
    };
  },

  methods: {
    LikedState() {
      if (this.RecetteLiked == false) {
        this.colorLike = "grey";

        console.log("Not liked");
      }
      if (this.RecetteLiked == true) {
        this.colorLike = "red";
      }
    },

    async ClickLike(Recette_ID, RecetteTitle) {
      console.log("Log enfant Id Recette : " + Recette_ID);
      if (this.colorLike == "red") {
        this.colorLike = "grey";

        console.log("liked");
      } else {
        this.colorLike = "red";
        this.user_connected.addFavoriteRecipe(Recette_ID, RecetteTitle);
        console.log("not liked");
      }
      console.log(await this.user_connected.getUserFavoriteRecipes());
    },

    ClickName(Recette_ID) {
      console.log("changement de page : " + Recette_ID);
      this.$router.push({
        name: "detail",
        params: { RecetteID: Recette_ID },
      });
    },
  },

  async mounted() {
    this.LikedState();

    if (SessionStorage.getItem("user") == null) {
      console.log("personne est co");
      this.$router.push({
        name: "connexion",
      });
    } else {
      const id = SessionStorage.getItem("user");
      console.log("qq est co ouloulou " + id);
      const API = new api();
      this.user_connected = await API.getUserFromId(id);
    }
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

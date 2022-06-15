<template>
  <div>
    <q-btn
      class="ButtonClassic"
      :ripple="{ center: true }"
      rounded
      @click="goToFavList"
      icon="favorite"
      color="warning"
      label="Consulter mes recettes favorites"
      no-caps
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "../utils/api";
import { SessionStorage } from "quasar";
import { serializeListRecetteShortRecette } from "../utils/utils";

export default defineComponent({
  name: "FavoriteButton",
  data() {
    return {
      user: null,
    };
  },
  methods: {
    async goToFavList() {
      const fav_recipes = await this.user.getUserFavoriteRecipes();
      console.log(serializeListRecetteShortRecette(fav_recipes));
      this.$router.push({
        name: "resultat",
        params: {
          ListRecettes: JSON.stringify(
            serializeListRecetteShortRecette(fav_recipes)
          ),
          Provenance: "Favorites",
        },
      });
    },
  },

  async mounted() {
    const API = new api();
    this.user = await API.getUserFromId(
      SessionStorage.getItem("user") == null
        ? 2
        : SessionStorage.getItem("user")
    );
  },
});
</script>

<style lang="scss">
.ButtonClassic {
  padding: 8px;
}
</style>

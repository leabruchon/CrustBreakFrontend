<template>
  <q-input
    borderless
    placeholder="  Rechercher des recettes..."
    v-model="text"
    class="bg-white"
  >
    <template v-slot:append>
      <q-icon class="q-mr-md" name="search" v-on:click="LaunchSearch(text)" />
    </template>
  </q-input>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "../utils/api";
import { serializeListRecetteShortRecette } from "../utils/utils";
export default defineComponent({
  name: "SearchBar",

  data() {
    return {
      Provenance: "Recherche",
    };
  },
  methods: {
    async LaunchSearch(TextSearch) {
      const API = new api();
      const recipes = await API.searchRecipe(TextSearch);
      this.$router.push({
        name: "resultat",
        params: {
          ListRecettes: JSON.stringify(
            serializeListRecetteShortRecette(recipes)
          ),
          Provenance: this.provenance,
        },
      });
      console.log("terme recherché " + TextSearch);
    },
  },
});
</script>

<style lang="scss">
.q-field {
  border-radius: 30px;
  width: 65%;
}
</style>

<template>
  <div class="div_buttons">
    <input type="file" @change="onFileSelected" />
    <button @click="onUpload">Générer une recette</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "../utils/api";

export default defineComponent({
  name: "UploadImage",
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    async onUpload() {
      const API = new api();
      console.log(this.selectedFile);
      const recipes = await API.getRecipesFromImage(this.selectedFile);
      console.log(recipes);
      //this.$router.push({ name: "connexion" });
    },
  },
});
</script>

<style lang="scss">
.div_buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

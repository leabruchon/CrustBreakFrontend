<template>
  <div class="div_buttons">
    <input type="file" @change="onFileSelected" />
    <button @click="onUpload">Générer une recette</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "HelloWorld",
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {},
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

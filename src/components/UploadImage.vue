<template>
  <div class="div_buttons">
    <input type="file" @change="onFileSelected" />
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

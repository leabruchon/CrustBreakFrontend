<template>
  <div class="div_buttons">
    <input type="file" @change="onFileSelected" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UploadImage",
  methods: {
    onFileSelected(event) {
      this.$emit("getFileFromUpload", event.target.files[0]);
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

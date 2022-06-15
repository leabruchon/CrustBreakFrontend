<template>
  <div class="div_buttons">
    <label for="file">
      <img src="/icons/icon_photo.png" alt="" class="bouton_photo" />
    </label>
    <input id="file" type="file" @change="onFileSelected" class="input-file" />
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

.input-file {
  display: none;
}

.bouton_photo {
  width: 50px;
  height: auto;
}
</style>

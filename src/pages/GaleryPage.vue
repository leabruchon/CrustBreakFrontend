<template>
  <UploadImage />
  <q-page class="flex flex-center"> </q-page>
</template>

<script>
import { defineComponent } from "vue";

//checkbox
import { ref } from "vue";
import UploadImage from "src/components/UploadImage.vue";

export default defineComponent({
  name: "GaleryPage",

  components: {
    UploadImage,
  },

  setup() {
    return {
      val: ref(true),
    };
  },
});
</script>

<template>
  <HelloWorld />
  <q-page class="flex flex-center"> </q-page>
</template>

<script>
import { defineComponent } from "vue";

//checkbox
import { ref } from "vue";
import HelloWorld from "src/components/HelloWorld.vue";

export default defineComponent({
  name: "GaleryPage",

  components: {
    HelloWorld,
  },

  setup() {
    return {
      val: ref(true),
    };
  },
});
</script>

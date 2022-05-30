<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view> </router-view>
    </q-page-container>

    <q-footer>
      <BottomNavbar />
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import BottomNavbar from "src/components/BottomNavbar.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    BottomNavbar,
  },
});
</script>

<template>
<<<<<<< HEAD
  <q-layout view="lHh Lpr lFf" class="bg-primary">
=======

  <q-layout view="lHh Lpr lFf">

>>>>>>> c4000f04cf66812db3d6a5bfa6a9437bd65c6321
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

<template>
  <q-page class="flex flex-center">
    This is the scan page
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { SessionStorage } from 'quasar'

export default defineComponent({
  name: 'ScanPage',

  mounted() {
    if (SessionStorage.getItem('user') == null) {
      console.log("personne est co") 
      this.$router.push({ name: 'connexion' });
    } else {
      console.log("qq est co ouloulou")
    }
  }
})
</script>
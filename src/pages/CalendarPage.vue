<template>
  <q-page class="flex flex-center">
    This is CalendarPage
    <RecipesCalendar/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import RecipesCalendar from "src/components/RecipesCalendar.vue";
import { SessionStorage } from 'quasar'

export default defineComponent({
  name: 'CalendarPage',

  components: {
    RecipesCalendar
  },

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
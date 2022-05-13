<template>
  <q-page class="flex flex-center">
    This is CalendarPage
    <RecipesCalendar/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import RecipesCalendar from "src/components/RecipesCalendar.vue";

export default defineComponent({
  name: 'CalendarPage',

  components: {
    RecipesCalendar
  },
})
</script>
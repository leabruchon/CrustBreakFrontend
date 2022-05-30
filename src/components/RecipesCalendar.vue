<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">

      <q-date
        v-model="date"
        :events="eventsFn"
      />
    </div>
  </div>
</template>


<script>
import { ref } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RecipesCalendar',

  setup () {

    return {
        date: ref('2019/02/01'),
      eventsFn (date) {
        const parts = date.split('/')
        return parts[ 2 ] % 2 === 0
      }
      }
    }
})
</script>
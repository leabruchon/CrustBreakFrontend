<template>
    <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 400px">
      <q-tabs
        align="justify"
        class="light-grey"
        active-color="warning"
        indicator-color="negative"
      >

      <q-route-tab
        icon="photo_camera"
        to="/scan"
        exact
      />
      <q-route-tab
        icon="cookie"
        to="/"
        exact
      />
      <q-route-tab
        icon="calendar_month"
        to="/calendar"
        exact
      />
       
      </q-tabs>
    </div>
  </div>
</template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BottomNavbar',
})
</script>

<style lang="scss">

  .q-pa-md{
    background-color: $negative;
    padding: 0;
   
    backdrop-filter: blur(3px);
    border-radius: 15px 15px 0px 0px;
  }
</style>


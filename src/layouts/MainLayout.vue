<template>

  <q-layout view="lHh Lpr lFf">
    <!--<q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
    </q-drawer>

     
-->
    <q-page-container>
        <router-view></router-view>
      </q-page-container>


    <q-footer class="bg-transparent">
          <BottomNavbar/>
    </q-footer>
      
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
//import EssentialLink from 'components/EssentialLink.vue'
import BottomNavbar from 'src/components/BottomNavbar.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    //EssentialLink,
    BottomNavbar
  },

})
</script>

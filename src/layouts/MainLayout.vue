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

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-markup-table>
      <thead>
        <tr>
          <th>title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in myJson" :key="data">
          <td>{{ data.name }}</td>
          <td>{{ data.aisle }}</td>
        </tr>
      </tbody>
    </q-markup-table>

    <q-page-container>
      <router-view />
    </q-page-container> -->

    <q-footer>
      <BottomNavbar />
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
//import EssentialLink from 'components/EssentialLink.vue'
import BottomNavbar from "src/components/BottomNavbar.vue";
import { api } from "../utils/api";
import { proxyToJson } from "../utils/utils";
/*
const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]*/

export default defineComponent({
  name: "MainLayout",

  components: {
    //EssentialLink,
    BottomNavbar,
  },

  /*
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }*/
});
</script>

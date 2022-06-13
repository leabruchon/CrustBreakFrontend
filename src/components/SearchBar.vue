<template>
  <q-input
    borderless
    placeholder="Rechercher des recettes..."
    v-model="text"
    class="bg-white"
  >
    <template v-slot:prepend>
      <q-icon class="q-mr-md" name="search" />
    </template>
  </q-input>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",
  /*methods:{

    Pas fini
    searchRecipes(){
//v-on:click="searchRecipes"
    }
  }*/
});
</script>

<style lang="scss">
.q-field {
  border-radius: 30px;
  width: 65%;
}
</style>

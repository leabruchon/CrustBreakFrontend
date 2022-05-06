<template>
  <div class="barre">
    <div class="q-gutter-y-md" style="max-width: 400px">
      <q-input
        align="center"
        bg-color="white"
        rounded
        outlined
        v-model="text"
        label="Rechercher des recettes..."
        counter
        maxlength="20"
        :dense="dense"
      >
        <template v-slot:before>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResearchBar",
});
</script>

<style lang="scss">
.barre {
  margin-left: auto;
  margin-right: auto;
  width: 5000px;
  position: relative;
}
</style>

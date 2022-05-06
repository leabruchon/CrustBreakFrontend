<template>
  <q-card class="my-card">
    <img
      src="https://cdn.quasar.dev/img/mountains.jpg"
      width="80"
      height="200"
    />

    <q-card-section>
      <div class="text-h3 q-mb-xs">Nom de Recette</div>
      <q-card-actions align="right">
        <q-btn flat round color="red" icon="favorite" size="40px" />
      </q-card-actions>

      <q-chip
        square
        color="grey"
        text-color="black"
        icon="alarm"
        label="Durée"
      />

      <div class="row no-wrap items-center">
        <q-rating size="30px" icon="euro_symbol" :max="5" color="primary" />
        <span class="text-caption text-black q-ml-sm"></span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CardReceipe3",
});
</script>
<style lang="scss"></style>

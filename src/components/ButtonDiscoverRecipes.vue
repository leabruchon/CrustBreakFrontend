<template>
  <div class="discover">
    <div class="q-gutter-y-md" style="max-width: 400px">
      <q-btn
        color="info"
        label="Découvrir des recettes"
        icon-right="chevron_right"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonDiscoverRecipes",
});
</script>

<style lang="scss">
.discover {
  border-radius: 50px;
  padding: 10px;
  position: absolute;
  top: 70px;
  margin-left: 0px;
  margin-right: 400px;
  width: 1000px;
}
</style>

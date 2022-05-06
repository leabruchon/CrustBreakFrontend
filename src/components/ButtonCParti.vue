<template>
  <div class="Button">
    <div class="q-gutter-y-md" style="max-width: 700px">
      <q-btn color="warning" label="C'est parti !" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonCParti",
});
</script>

<style lang="scss">
.Button {
  margin-left: auto;
  margin-right: auto;
  width: 4000px;
}
</style>

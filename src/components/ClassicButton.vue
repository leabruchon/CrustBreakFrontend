<template>
  <div>
    <q-btn
      :ripple="{ center: true }"
      rounded
      color="warning"
      label="Outline Rounded"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClassicButton",
});
</script>

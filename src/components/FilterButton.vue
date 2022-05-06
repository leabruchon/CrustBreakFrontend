<template>
  <q-btn no-caps push color="warning" icon="filter_list" @click="show()" />
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "FilterButton",

  //setup bottom sheet
  setup() {
    const $q = useQuasar();

    function show(grid) {
      $q.bottomSheet({
        message: "Gérer mes goûts",
        grid,
        actions: [
          {
            label: "Drive",
            img: "https://cdn.quasar.dev/img/logo_drive_128px.png",
            id: "drive",
          },
          {
            label: "Keep",
            img: "https://cdn.quasar.dev/img/logo_keep_128px.png",
            id: "keep",
          },
          {
            label: "Google Hangouts",
            img: "https://cdn.quasar.dev/img/logo_hangouts_128px.png",
            id: "calendar",
          },
          {
            label: "Calendar",
            img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
            id: "calendar",
          },
          {},
        ],
      })
        .onOk((action) => {
          // console.log('Action chosen:', action.id)
        })
        .onCancel(() => {
          // console.log('Dismissed')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    return { show };
  },
});
</script>

<style lang="scss">
.q-card {
  background-color: $light-blue;
}

.q-btn {
  border-radius: 50px;
  padding: 10px;
  position: absolute;
  top: 300px;
  margin-left: 302px;
}
</style>

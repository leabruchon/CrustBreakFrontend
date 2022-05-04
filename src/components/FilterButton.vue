<template>
    <q-btn icon="filter_list" color="warning" @click="open('bottom')" />

    <q-dialog v-model="dialog" :position="position">
      <q-card style="width: 350px">
        

        <q-card-section class="row items-center no-wrap">
          <div>
            <div class="text-weight-bold">Gérer mes goûts</div>
            <div class="text-grey">Fitz The Tantrums</div>
          </div>

          <q-space />

          
        </q-card-section>
      </q-card>
    </q-dialog>

</template>


<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'FilterButton',

  setup () {
    const dialog = ref(false)
    const position = ref('top')

    return {
      dialog,
      position,

      open (pos) {
        position.value = pos
        dialog.value = true
      }
    }
  }

})
</script>

<style lang="scss">

    .q-btn{
        border-radius: 20px;
        padding: 7px;
    }

    .q-card{
        background-color: $info;
    }

</style>


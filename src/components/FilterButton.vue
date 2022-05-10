<template>
    <q-btn icon="filter_list" color="warning" @click="open('bottom')" />
    <q-dialog v-model="dialog" :position="position"> 
        <q-card style="width: 350px">
        <div class = "all-filters">
            <div class = "header-filters">
                <div><q-btn no-caps icon = "close"  v-close-popup /></div>
                <div class="text-h6 text-weight-bold">Gérer mes goûts</div>
            </div>
            <q-card-section class="row items-center no-wrap">
                <div>
                    <div class="text-weight-bold">Régime alimentaire</div>
                    <div class="text-weight-bold">Coût</div>
                </div>
            </q-card-section>
        </div>
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
        color: $positive;
    }

    .q-btn:before{
        box-shadow: none;
    }

    .header-filters{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

</style>


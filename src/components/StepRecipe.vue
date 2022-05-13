<template>
  <div class="backgroundRecipe q-mx-md q-px-md">
    
    <h1 class="text-h4">{{title}}</h1>
    
    <p>{{consigne}}</p>

    <p class="pTitre"><strong>Equipements</strong></p>
    <i class="fa-solid fa-oven"></i>
    <i class="fa-solid fa-flag"></i>
       

    </div>

</template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StepRecipe',
  props: {
      consigne: String, 
      title: String,
  }

})
</script>

<style lang="scss">

.backgroundRecipe {
    background-color: $dark-blue;
    border-radius: 12px;
    color: white;

    margin-top: 2vh;
}

.pTitre{
    font-size: 18px;
}

</style>
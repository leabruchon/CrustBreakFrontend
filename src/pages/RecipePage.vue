<template>
  <q-page class="flex flex-center">
    <IntroRecipe 
    title = "Nom de la recette un peu long" 
    image = "imageRecipe.jpeg"
    time = 9
    nbPerson = 3
    />

    <StepRecipe 
    title = "Step 1"
    consigne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis eu at lacus aliquam amet libero. Vulputate est non diam cursus malesuada. Eget montes.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis eu at lacus aliquam amet libero. Vulputate est non diam cursus malesuada. Eget montes."
    
    />

    <StepRecipe 
    title = "Step 2"
    consigne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis eu at lacus aliquam amet libero. Vulputate est non diam cursus malesuada. Eget montes.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis eu at lacus aliquam amet libero. Vulputate est non diam cursus malesuada. Eget montes."
    
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import IntroRecipe from 'src/components/IntroRecipe.vue'
import StepRecipe from 'src/components/StepRecipe.vue'

export default defineComponent({
  name: 'RecipePage', 
  components: {
      IntroRecipe,
      StepRecipe
  }
})
</script>
<template>
  <div class="backgroundRecipe q-mx-md q-px-md">
    <h1 class="text-h4">
      <strong>{{ title }}</strong>
    </h1>

    <q-img
      :src="image"
      class="imageRecipe"
      :ratio="2 / 1"
    />

    <div class="paramsRecipe">
      <div class="leftParams">
        <div class="timeParam">
          <q-icon name="schedule" size="26px" />
          <p class="pParams">
            <strong>{{ time }} min</strong>
          </p>
        </div>
      </div>

      <div class="rightParams">
        <div class="regimAlimentaire">
          <i class="las la-bread-slice fa-2x iconGluten"></i>
          <i class="las la-leaf fa-2x"></i>
        </div>
      </div>
    </div>

    <p class="pTitre"><strong>Ingrédients</strong></p>

    <ul class = "listIngredients">
      <li v-for="ingredient in ingredients" v-bind:key="ingredient">
        {{ingredient.name}}
      </li>
    </ul>
    <p class="pTitre"><strong>Equipements</strong></p>
    <ul>
      <li v-for="equipement in equipements" v-bind:key="equipement">
        {{equipement.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IntroRecipe",
  props: {
    title: String,
    image: String,
    time: Number,
    nbPerson: Number,
    ingredients : Array,
    equipements : Array,
  },


});
</script>

<style lang="scss">
.backgroundRecipe {
  background-color: $secondary;
  border-radius: 12px;
  color: white;
}

.imageRecipe {
  width: 100%;
  border-radius: 12px;
  display: block;
  margin: 0px auto;
}

.paramsRecipe {
  display: flex;
  margin: 0px auto;
  justify-content: space-between;
  margin-top: 1.5vh;
}

.leftParams {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
.timeParam {
  display: flex;
  width: auto;
}

.nbPeopleParam {
  display: flex;
}

.pParams {
  margin-left: 2vw;
  font-size: 18px;
}

.iconGluten {
  margin-right: 1vw;
}

.pTitre {
  font-size: 18px;
}

ul {
 padding: 15px;
}
</style>

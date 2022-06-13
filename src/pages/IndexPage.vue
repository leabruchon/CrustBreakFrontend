<template>
  <q-page class="flex flex-center PageIndex">
    <div class="top-bar">
      <SearchBar />
      <FilterButton />
      <q-icon class="user" name="account_circle" />
    </div>
    <div class="spinner-generation">
      <SpinnerGenerateRecipe @NbRecette="TakeNbRecFromChild" />
    </div>
    <div class="recipes">
      <div class="rowReciepes">
        <div class="reciepe">
          <CardRecipe
            @AddToLike="ChangeStateLike"
            :RecetteID="rID1"
            :RecetteTitle="rN1"
            :RecetteImg="rImg1"
            :RecetteLiked="rL1"
          />
        </div>
        <div class="reciepe">
          <CardRecipe
            @AddToLike="ChangeStateLike"
            :RecetteID="rID2"
            :RecetteTitle="rN2"
            :RecetteImg="rImg2"
            :RecetteLiked="rL2"
          />
        </div>
      </div>
      <div class="rowReciepes">
        <div class="reciepe">
          <CardRecipe
            @AddToLike="ChangeStateLike"
            :RecetteID="rID3"
            :RecetteTitle="rN3"
            :RecetteImg="rImg3"
            :RecetteLiked="rL3"
          />
        </div>
        <div class="reciepe">
          <CardRecipe
            @AddToLike="ChangeStateLike"
            :RecetteID="rID4"
            :RecetteTitle="rN4"
            :RecetteImg="rImg4"
            :RecetteLiked="rL4"
          />
        </div>
      </div>
      <div class="rowReciepes">
        <div class="reciepe">
          <CardRecipe
            @AddToLike="ChangeStateLike"
            :RecetteID="rID5"
            :RecetteTitle="rN5"
            :RecetteImg="rImg5"
            :RecetteLiked="rL5"
          />
        </div>
        <div class="reciepe">
          <CardRecipe
            @AddToLike="ChangeStateLike"
            :RecetteID="rID6"
            :RecetteTitle="rN6"
            :RecetteImg="rImg6"
            :RecetteLiked="rL6"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
window.onload = function () {};
import { defineComponent, onMounted } from "vue";
import SpinnerGenerateRecipe from "src/components/SpinnerGenerateRecipe.vue";
import FilterButton from "src/components/FilterButton.vue";
import SearchBar from "src/components/SearchBar.vue";
import CardRecipe from "src/components/CardRecipe.vue";

export default defineComponent({
  name: "IndexPage",

  data() {
    return {
      recettes: null,
    };
  },

  methods: {
    LoadSixStations() {
      return "test";
    },

    ChangeStateLike(IdRecette) {
      console.log("LogParent Id Recette : " + IdRecette);
    },
    TakeNbRecFromChild(NbRecChild) {
      console.log("LogParent Nb Recettes : " + NbRecChild);
    },
  },

  async mounted() {},

  components: {
    FilterButton,
    SearchBar,
    CardRecipe,
    SpinnerGenerateRecipe,
  },
});
</script>

<style lang="scss">
.PageIndex {
  align-content: flex-start;
}
.top-bar {
  display: flex;
  width: 100%;
  align-items: center;
  align-content: flex-start;
  justify-content: space-evenly;
  margin-top: 18px;
}

.spinner-generation {
  display: flex;
  justify-content: center;
  margin: 24px;
}

.recipes {
  display: flex;
  flex-direction: column;
}

.rowReciepes {
  display: flex;
  flex-direction: row;
}

.reciepe {
  margin: 2%;
}

.user {
  color: $positive;
  size: 10rem;
}
</style>

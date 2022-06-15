<template>
  <q-page class="flex flex-center PageIndex">
    <div class="top-bar">
      <SearchBar />
      <FilterButton />
      <q-item to="/user">
        <q-icon class="user" name="account_circle" />
      </q-item>
      
    </div>
    <div class="spinner-generation">
      <SpinnerGenerateRecipe @NbRecette="TakeNbRecFromChild" />
    </div>
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="recipes">
      <div class="conteneur">
        <div class="Column">
          <div v-for="recipe in firstHalf" :key="recipe._id">
            <CardRecipe
              :RecetteID="recipe._id"
              :RecetteImg="recipe._image"
              :RecetteTitle="recipe._title"
            />
            <div class="separator"></div>
          </div>
        </div>
        <div class="separator"></div>
        <div class="Column">
          <div v-for="recipe in secondHalf" :key="recipe._id" class="Card">
            <CardRecipe
              :RecetteID="recipe._id"
              :RecetteImg="recipe._image"
              :RecetteTitle="recipe._title"
            />
            <div class="separator"></div>
          </div>
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
import { api } from "../utils/api";

export default defineComponent({
  name: "IndexPage",

  data() {
    return {
      recipes: null,
      ListRecettes: null,
      firstHalf: null,
      secondHalf: null,
      recettes: null,
    };
  },

  methods: {
    ChangeStateLike(IdRecette) {
      console.log("LogParent Id Recette : " + IdRecette);
    },
    TakeNbRecFromChild(NbRecChild) {
      console.log("LogParent Nb Recettes : " + NbRecChild);
      this.$router.push({
        name: "resultat",
        params: { nbRecetteSelect: NbRecChild },
      });
    },

    twoHalfList() {
      console.log("coucuo");
      for (var i = 0; i < this.ListRecettes.length; i++) {
        const half = Math.ceil(this.ListRecettes.length / 2);
        this.firstHalf = this.ListRecettes.splice(0, half);
        this.secondHalf = this.ListRecettes.splice(-half);
      }
    },
  },

  async mounted() {
    const API = new api();
    let elemLoad = document.querySelector(".lds-ring");
    elemLoad.style.display = "block";
    const recipes = await API.get6RandomRecipes();
    elemLoad.style.display = "none";
    console.log(recipes);
    this.recipes = recipes;
    this.ListRecettes = [];
    recipes.forEach((element) => {
      console.log(element._id);
      this.ListRecettes.push({
        _id: element._id,
        _title: element._title,
        _image: element._image,
      });
    });
    console.log(this.ListRecettes);
    this.twoHalfList();
  },

  components: {
    FilterButton,
    SearchBar,
    CardRecipe,
    SpinnerGenerateRecipe,
  },
});
</script>

<style lang="scss">
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
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
.conteneur {
  display: flex;
  justify-content: center;
}

.Column {
  display: flex;
  flex-direction: column;
}

.separator {
  height: 10px;
  width: 20px;
}

.card{
  margin-bottom: 10px;
}

.user {
  color: $positive;
  size: 10rem;
}
</style>

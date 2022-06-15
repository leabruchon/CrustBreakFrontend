<template>

  <div class = "user-page">

    <BackButton/>

    <div class = "user-infos">
      
      <p>PRÉNOM</p>
      <h6>{{prenom}}</h6>
      <p>NOM</p>
      <h6>{{nom}}</h6>
      <p>DATE DE NAISSANCE</p>
      <h6>{{birthdate}}</h6>
      <p>EMAIL</p>
      <h6>{{email}}</h6>

    </div>

    <div class = "favorite-btn">
      <q-btn
      class="ButtonClassic"
      :ripple="{ center: true }"
      rounded
      @click="goToFavList"
      icon="favorite"
      color="warning"
      label="Mes recettes favorites"
      no-caps
      />
    </div>
    
  </div>

</template>

<script>
import { defineComponent } from "vue";
import { api } from "../utils/api";
import { SessionStorage } from "quasar";
import BackButton from "src/components/BackButton.vue";
import {serializeListRecetteShortRecette} from "../utils/utils"

export default defineComponent({
  name: "FavoriteButton",
  data() {
    return {
      user: null,
    };
  },
  methods: {
    async goToFavList() {
      const fav_recipes = await this.user.getUserFavoriteRecipes();
      console.log(serializeListRecetteShortRecette(fav_recipes));
      this.$router.push({
        name: "resultat",
        params: {
          ListRecettes: JSON.stringify(
            serializeListRecetteShortRecette(fav_recipes)
          ),
          Provenance: "Favorites",
        },
      });
    },
  },

  async mounted() {
    const API = new api();
    
    this.user = await API.getUserFromId(SessionStorage.getItem("user")); 
    this.prenom = this.user._firstname
    this.nom = this.user._lastname
    this.birthdate = this.user._birthdate
    this.email = this.user._email
    console.log(this.birthdate)
  },

  components: {
    BackButton
  },

  data() {
    return {
      prenom: null,
      nom: null,
      birthdate: null,
      email: null,
      
    };
    
  },
});
</script>

<style lang="scss">
.ButtonClassic {
  padding: 8px;
}

.user-page{
  padding: 10px;
}

.user-infos{
  padding: 20px;
  color: $positive;
}

h6{
  margin: 0;
  padding-bottom: 20px;

}

p{
  margin-bottom: 0px;
}

.favorite-btn{
  padding: 10px;
}
</style>

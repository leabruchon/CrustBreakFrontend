<template>
  <div class="conteneur">
    <div class="Expl">{{ TextDisplay }}</div>
  </div>
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
</template>

<script>
window.onload = function () {};
import { defineComponent, onMounted } from "vue";

import CardRecipe from "src/components/CardRecipe.vue";

export default defineComponent({
  name: "IndexPage",

  data() {
    return {
      ListRecettes: null,
      firstHalf: null,
      secondHalf: null,
      TextDisplay: "Chargement...",
    };
  },

  methods: {
    twoHalfList() {
      for (var i = 0; i < this.ListRecettes.length; i++) {
        const half = Math.ceil(this.ListRecettes.length / 2);
        this.firstHalf = this.ListRecettes.splice(0, half);
        this.secondHalf = this.ListRecettes.splice(-half);
      }
    },
  },

  async mounted() {
    let recipes = null;
    let provenance = null;
    let nbrec = null;

    console.log(
      "liste result :" + this.$router.currentRoute._value.params["ListRecettes"]
    );
    if (this.$router.currentRoute._value.params["ListRecettes"] === undefined) {
      console.log("Erreur aucun resultat");
    } else {
      recipes = JSON.parse(
        this.$router.currentRoute._value.params["ListRecettes"]
      );
      provenance = this.$router.currentRoute._value.params["Provenance"];
      nbrec = this.$router.currentRoute._value.params["Nombre"];
    }
    this.ListRecettes = recipes;
    if (this.ListRecettes == null) {
      this.TextDisplay = "Aucun résultat à afficher";
    } else {
      this.twoHalfList();
    }

    if (provenance == "Spinner") {
      console.log("spinner taille rec" + nbrec);
      if (nbrec == 0) {
        this.TextDisplay = "Vous n'avez demandé aucune recette";
      }
      if (nbrec == 1) {
        this.TextDisplay = "Voici votre recette générée aléatoirement !";
      }
      if (nbrec > 1) {
        let part1 = "Voici vos ";
        let part2 = nbrec;
        let part3 = " recettes générées aléatoirement !";
        this.TextDisplay = part1 + part2 + part3;
      }
    }

    console.log(this.ListRecettes);
  },

  components: {
    CardRecipe,
  },
});
</script>

<style lang="scss">
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

.Expl {
  display: flex;
  text-align: center;
  color: white;
  width: 50%;
  font-weight: 300;
  font-size: 1rem;
  margin-top: 8%;
  margin-bottom: 8%;
}
</style>

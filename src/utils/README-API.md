# Utiliser l'API

La connexion à l'API est déjà codée dans un classe sitée dans le /src/utils/api.js. Afin d'utiliser l'API dans un component il faut d'abord importer les outils :

## Les requetes avec l'objet `api` (Utilisateur n'est pas connecté : Visiteur)

```js
import { api } from "../utils/api";
```

Ensuite bien sur il faut instancier la classe (souvent on le fait juste avant l'appel, évolution possible : rendre l'objet API global) :

```js
const API = new api();
```

Afin pour l'utiliser il faut utiliser le mot clé `await` puisque l'accès est aynchrone. Pour cela l'appel doit se faire dans une fonction avec le mot clé `async` devant, exemple dans la fonction `mounted()` ce dessous :

```js
export default defineComponent({
  name: "..",

  components: {
   ...,
  },
  data() {
    return {
      data: [],
    };
  },
  async mounted() {
    const API = new api(); //instanciation de la classe
    this.data = await API.getIngredientListFromRecipe(479101); //assignation de la valeur de retour à une variable qui pourra être utilisée et manipulée dans le template.
  },
  setup() {
    ...

    return {
      ...
    };
  },
});
```

Exemple de la recherche d'une recette, elle retourne une liste `Array` contenant des objets recettes `Recipe` dont la classe est dans le dossier Utils :

L'ensemble des paramètres de chaque appel de l'API est documenté.
Fonctions concernées :

```js
searchRecipe(search_title, cusine_type, meal_type, diet, exclude_ingredient); //rechercher des recettes
getRecipeDetails(recipe_id); //Trouver les détails d'une recette -> nécessaire pour afficher le temps de préparation, les ingrédients, les étapes...
getIngredientListFromRecipe(recipe_id); //générer une liste de course
getRecipesFromImage(ingredient_list_image); //générer des recette à partir d'une image
addUser(firstname, lastname, birthdate, email, password, gouts);
deleteUser(user_id); //suppression de compte

//pas encore faites
signInUser();
signUpUser();
```

## Les requetes avec l'objet `User` (Utilisateur connecté -> il faut un compte)

```js
import { User } from "../utils/User";
```

Ensuite bien sur il faut instancier la classe (souvent on le fait juste avant l'appel, évolution possible : rendre l'objet User global) :

```js
const user = new User(...params);
```

L'ensemble des paramètres de chaque appel de l'API est documenté.
Fonctions concernées :

```js
user.getUserFavoriteRecipes();
user.addFavoriteRecipe(recipe_id, recette_name);
user.getUserTodoRecipes();
user.addTodoRecipe(recipe_id, recette_name, meal_date);
user.updateProfile(firstname, lastname, birthdate, email, password, gouts);
```

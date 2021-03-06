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
get6RandomRecipes(); //permet de récupérer 6 recettes au hasard dans la bdd
getRecipeDetails(recipe_id); //Trouver les détails d'une recette -> nécessaire pour afficher le temps de préparation, les ingrédients, les étapes...
getIngredientListFromRecipe(recipe_id); //générer une liste de course
getRecipesFromImage(ingredient_list_image); //générer des recette à partir d'une image
addUser(firstname, lastname, birthdate, email, password, gouts);
deleteUser(user_id); //suppression de compte
checkUserCanSignUp(email, password); //check if the user can sign up -> appeler addUser après
checkUserCanSignIn(email, password); //check if the user can sign in
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

## Inscription utilisateur :

```js
const API = new api();
const rep = await API.checkUserCanSignUp("oli@hotmail.fr", "password2");
if (rep["code"] === 1) {
  console.log("user can sign Up");
  const rep2 = await API.addUser(
    "oliv",
    "fct",
    "2022-01-01",
    "oli@hotmail.fr",
    "password2",
    '"sugar":"no"'
  );
  console.log(rep2);
  console.log("User added ! ");
} else {
  console.log(rep["message"]);
}
```

## Retrouver l'utilisateur connecté

Evidemment ce code devra être dans une fonction `async`.
`user_connected` est du type `User`

```js
import { api } from "src/utils/api";

...

const API = new api();
const user_connected = await API.getUserFromId(4);
```

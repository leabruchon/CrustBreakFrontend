# Utiliser l'API

La connexion à l'API est déjà codée dans un classe sitée dans le /src/utils/api.js. Afin d'utiliser l'API dans un component il faut d'abord importer les outils :

```js
import { api } from "../utils/api";
import { proxyToJson } from "../utils/utils";
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

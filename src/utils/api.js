import { Recipe } from "./Recipe";
import { User } from "./User";
export class api {
  constructor() {
    this._host = "http://94.247.183.221:8040";
  }

  /**
   * A function with the aim to search for a recipe over our api using several fields
   * @param {String} search_title The title of what we are looking for : burger, pizza
   * @param {String} cusine_type The cuisine type exemple : american, italian
   * @param {String} meal_type The meal type, exemple : main course, entry
   * @param {String} diet The diet type, exemple : vegetarian
   * @param {Array} exclude_ingredient The list of ingredients to exclude, exemple : ['onion','tomato']
   * @return {JSON} the json response
   */
  searchRecipe(
    search_title,
    cusine_type = "",
    meal_type = "",
    diet = "",
    exclude_ingredient = []
  ) {
    const url = `${
      this._host
    }/api/v1/recette/search?name=${search_title.toLowerCase()}&cuisine=${cusine_type.toLowerCase()}&type=${meal_type.toLowerCase()}&diet=${diet.toLowerCase()}&exclude=${exclude_ingredient
      .join(",")
      .toLowerCase()}`;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(url, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              const result = JSON.parse(
                JSON.stringify(Object.assign({}, data))
              );
              return result["results"].map((r) => {
                return new Recipe(r["id"], r["title"], r["image"]);
              });
            })
        );
      }, 3000);
    });
  }

  /**
   * A function with the aim to get 6 random recipes.
   * @return {JSON} the json response
   */
  get6RandomRecipes() {
    const search_titles = [
      "burger",
      "pizza",
      "sushi",
      "pasta",
      "kebab",
      "tacos",
      "burritos",
      "beef",
      "chicken",
      "lamb",
    ];
    let search_title =
      search_titles[Math.floor(Math.random() * search_titles.length)];
    const cusine_types = ["italien", "asian", "american", "french"];
    let cusine_type =
      cusine_types[Math.floor(Math.random() * cusine_types.length)];
    let meal_type = "";
    let diet = "";
    let exclude_ingredient = [];
    const url = `${
      this._host
    }/api/v1/recette/search?name=${search_title.toLowerCase()}&cuisine=${cusine_type.toLowerCase()}&type=${meal_type.toLowerCase()}&diet=${diet.toLowerCase()}&exclude=${exclude_ingredient
      .join(",")
      .toLowerCase()}`;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(url, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              const result = JSON.parse(
                JSON.stringify(Object.assign({}, data))
              );
              if (result["results"].length > 6) {
                return result["results"]
                  .map((r) => {
                    return new Recipe(r["id"], r["title"], r["image"]);
                  })
                  .slice(0, 6);
              } else {
                return result["results"].map((r) => {
                  return new Recipe(r["id"], r["title"], r["image"]);
                });
              }
            })
        );
      }, 3000);
    });
  }

  /**
   * A function with the aim to search for a recipe over our api using several fields
   * @param {Number} recipe_id The recipe id from the api example : 479101
   * @return {Recipe} the json response
   */
  getRecipeDetails(recipe_id) {
    const url = `${this._host}/api/v1/recette/detail/${recipe_id}`;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(url, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              const r = JSON.parse(JSON.stringify(Object.assign({}, data)));
              return new Recipe(
                r["id"],
                r["title"],
                r["image"],
                r["extendedIngredients"],
                r["readyInMinutes"],
                r["dishTypes"],
                r["summary"],
                r["analyzedInstructions"],
                r["equipment"]
              );
            })
        );
      }, 7000);
    });
  }

  /**
   * A function with the aim to search for a recipe over our api using several fields
   * @param {Number} recipe_id The recipe id from the api example : 479101
   * @return {JSON} the json response
   */
  getIngredientListFromRecipe(recipe_id) {
    const url = `${this._host}/api/v1/recette/generate-liste-de-courses?recipe=${recipe_id}`;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(url, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              const result = JSON.parse(
                JSON.stringify(Object.assign({}, data))
              );
              return result["list"];
            })
        );
      }, 1000);
    });
  }

  /**
   * A function with the aim to generate a recipe list that match all the ingredient of a receipts (currently not working with image -> return always the same result)
   * @param {File} ingredient_list_image File that contains image
   * @return {JSON} the json response
   */
  getRecipesFromImage(ingredient_list_image) {
    const url = `${this._host}/api/v1/recette/generate-recipe`;
    let formData = new FormData();

    formData.append("img", ingredient_list_image);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(url, {
            method: "POST",
            body: formData,
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              const result = JSON.parse(
                JSON.stringify(Object.assign({}, data))
              );
              return result["results"].map((r) => {
                return new Recipe(r["id"], r["title"], r["image"]);
              });
            })
        );
      }, 2000);
    });
  }

  /**
   * A function that verify if the user can sign up, if it's ok you can user the function addUser
   * @param {String} email user's mail adress
   * @param {String} password User's password
   * @return {object} {code, message} code : 1 if okay else -1, message : describe what's wrong
   */
  checkUserCanSignUp(email, password) {
    const url = `${this._host}/api/v1/user/can-sign-up`;
    let formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(url, {
            method: "POST",
            body: formData,
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              const result = JSON.parse(
                JSON.stringify(Object.assign({}, data))
              );
              return { code: result["code"], message: result["message"] };
            })
        );
      }, 3000);
    });
  }

  /**
   * A function with the aim to add the user to the api
   * @param {String} firstname User's firstname
   * @param {String} lastname User's lastname
   * @param {String} birthdate User's birthdate : yyyy-mm-dd
   * @param {String} email user's mail adress
   * @param {String} password User's password
   * @param {object} gouts User's nutrition preferences, example : {"sugar":"no"}
   * @return {JSON} the json response
   */
  addUser(firstname, lastname, birthdate, email, password, gouts) {
    const url = `${this._host}/api/v1/user/add`;
    let formData = new FormData();

    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("birthdate", birthdate);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("gouts", gouts);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(url, {
            method: "POST",
            body: formData,
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              const result = JSON.parse(
                JSON.stringify(Object.assign({}, data))
              );
              return result;
            })
        );
      }, 3000);
    });
  }

  /**
   * A function that verify if the user can sign in, if it's ok the user is signed in
   * @param {String} email user's mail adress
   * @param {String} password User's password
   * @return {object} {code, message, user } code : 1 if okay else -1, message : describe what's wrong if it's okay it return the user
   */
  checkUserCanSignIn(email, password) {
    const url = `${this._host}/api/v1/user/can-sign-in`;
    let formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(url, {
            method: "POST",
            body: formData,
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              const result = JSON.parse(
                JSON.stringify(Object.assign({}, data))
              );
              if (result["code"] == 1) {
                //user can sign in
                return {
                  code: result["code"],
                  message: result["message"],
                  user: new User(
                    result["user"]["id"],
                    result["user"]["prenom"],
                    result["user"]["nom"],
                    result["user"]["naissance"],
                    result["user"]["email"],
                    result["user"]["password"],
                    result["user"]["gouts"]
                  ),
                };
              } else {
                return { code: result["code"], message: result["message"] };
              }
            })
        );
      }, 4000);
    });
  }

  /**
   * A function with the aim to update the user to the api
   * @param {Number} user_id Id of the user in the database
   * @param {String} firstname User's firstname
   * @param {String} lastname User's lastname
   * @param {String} birthdate User's birthdate : yyyy-mm-dd
   * @param {String} email user's mail adress
   * @param {String} password User's password
   * @param {object} gouts User's nutrition preferences, example : {"sugar":"no"}
   * @return {JSON} the json response
   */
  updateUser(user_id, firstname, lastname, birthdate, email, password, gouts) {
    const url = `${this._host}/api/v1/user/update/${user_id}`;
    const formData = new FormData();

    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("birthdate", birthdate);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("gouts", gouts);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(url, {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              const result = JSON.parse(
                JSON.stringify(Object.assign({}, data))
              );
              return result;
            })
        );
      }, 3000);
    });
  }

  /**
   * A function with the aim to search for a recipe over our api using several fields
   * @param {Number} user_id user's Id
   * @return {Array} Array of the favorite recipes
   */
  getUserFavoriteRecipes(user_id) {
    const url = `${this._host}/api/v1/user/${user_id}/get/favorites-receipes`;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(url, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              const result = JSON.parse(
                JSON.stringify(Object.assign({}, data))
              );
              return result["recipes"].map((r) => {
                return new Recipe(r["receipe_id"], r["receipe_name"]);
              });
            })
        );
      }, 3000);
    });
  }
  /**
   * A function with the aim to add the user to the api
   * @param {Number} user_id User's Id
   * @param {Number} recette_id Recipe's id
   * @param {String} recette_name Recipe's name
   * @return {JSON} the json response
   */
  addFavoriteRecipe(user_id, recette_id, recette_name) {
    const url = `${this._host}/api/v1/user/${user_id}/add/to-favorites`;
    const formData = new FormData();

    formData.append("recette_id", recette_id);
    formData.append("recette_name", recette_name);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(url, {
            method: "POST",
            body: formData,
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              const result = JSON.parse(
                JSON.stringify(Object.assign({}, data))
              );
              return result;
            })
        );
      }, 3000);
    });
  }

  /*PAS ENCORE FONCTIONNEL */

  /**
   * A function with the aim to search for a recipe over our api using several fields
   * @param {Number} user_id user's Id
   * @return {Array} Array of the favorite recipes
   */
  getUserTodoRecipes(user_id) {
    const url = `${this._host}/api/v1/user/${user_id}/get/todo-receipes`;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(url, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              const result = JSON.parse(
                JSON.stringify(Object.assign({}, data))
              );
              return result["recipes"].map((r) => {
                return {
                  recipe: new Recipe(r["receipe_id"], r["receipe_name"]),
                  date: r["meal_date"],
                };
              });
            })
        );
      }, 3000);
    });
  }

  /**
   * A recipe to the user's todo recipe in the API
   * @param {Number} user_id User's Id
   * @param {Number} recette_id Recipe's id
   * @param {String} recette_name Recipe's name
   * @param {String} meal_date Recipe's date YYYY-MM-DD
   * @return {JSON} the json response
   */
  addTodoRecipe(user_id, recette_id, recette_name, meal_date) {
    const url = `${this._host}/api/v1/user/${user_id}/add/todo-receipes`;
    const formData = new FormData();

    formData.append("recette_id", recette_id);
    formData.append("recette_name", recette_name);
    formData.append("meal_date", meal_date);
    formData.append("meal_type", "");

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(url, {
            method: "POST",
            body: formData,
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              const result = JSON.parse(
                JSON.stringify(Object.assign({}, data))
              );
              return result;
            })
        );
      }, 3000);
    });
  }

  /**
   * A function with theaim to return the user from
   * @param {Number} user_id user's Id
   * @return {User} The user corresponding to the id
   */
  getUserFromId(user_id) {
    const url = `${this._host}/api/v1/user/detail/${user_id}`;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(url, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              const result = JSON.parse(
                JSON.stringify(Object.assign({}, data))
              );
              return new User(
                result["id"],
                result["prenom"],
                result["nom"],
                result["naissance"],
                result["email"],
                result["password"],
                result["gouts"]
              );
            })
        );
      }, 3000);
    });
  }
}

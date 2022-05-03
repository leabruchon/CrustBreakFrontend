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
  searchRecipe(search_title, cusine_type, meal_type, diet, exclude_ingredient) {
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
   * A function with the aim to search for a recipe over our api using several fields
   * @param {Number} recipe_id The recipe id from the api example : 479101
   * @return {JSON} the json response
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
              const result = JSON.parse(
                JSON.stringify(Object.assign({}, data))
              );
              return result;
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
              return result;
            })
        );
      }, 1000);
    });
  }

  /**
   * A function with the aim to generate a recipe list that match all the ingredient of a receipts (currently not working with image -> return always the same result)
   * @param {String} ingredient_list_image String that contains the B64 encoded image
   * @return {JSON} the json response
   */
  getRecipesFromImage(ingredient_list_image) {
    const url = `${this._host}/api/v1/recette/generate-recipe?imageB64=${ingredient_list_image}`;

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
              return result;
            })
        );
      }, 2000);
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
            data: formData,
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
            data: formData,
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
}

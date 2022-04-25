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
              return result;
            })
        );
      }, 3000);
    });
  }
}

export class Recipe {
  /**
   * A function with the aim to add the user to the api
   * @param {Number} id id
   * @param {String} title title of the recipe
   * @param {String} image url of the recipe's image
   * @param {Array} ingredientList List of ingredient : extendedIngredients
   * @param {Number} readyInMinutes Preparation time
   * @param {Array} dishTypes list of dish type main course, dinner...
   * @param {String} summary summary of the recipe
   * @param {Array} analyzedInstructions Array of instruction
   * @param {Array} equipment equipement list
   */
  constructor(
    id,
    title,
    image,
    ingredientList = [],
    readyInMinutes = 0,
    dishTypes = [],
    summary = "",
    analyzedInstructions = [],
    equipment = []
  ) {
    this._id = id;
    this._title = title;
    this._image = image;
    this._ingredientList = ingredientList;
    this._readyInMinutes = readyInMinutes;
    this._dishTypes = dishTypes;
    this._summary = summary;
    this._analyzedInstructions = analyzedInstructions;
    this._equipment = equipment;
  }

  get id() {
    return this._id;
  }
  get title() {
    return this._title;
  }
  get image() {
    return this._image;
  }
  get ingredientList() {
    return this._ingredientList;
  }
  get readyInMinutes() {
    return this._readyInMinutes;
  }
  get dishTypes() {
    return this._dishTypes;
  }
  get summary() {
    return this._summary;
  }
  get analyzedInstructions() {
    return this._analyzedInstructions;
  }
  get equipment() {
    return this._equipment;
  }
}

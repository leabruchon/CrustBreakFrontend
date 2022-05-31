import { api } from "./api";
import { Recipe } from "./Recipe";

export class User {
  /**
   * constructor of the User class
   * @param {Number} id User's id
   * @param {String} firstname User's firstname
   * @param {String} lastname User's lastname
   * @param {String} birthdate User's birthdate : yyyy-mm-dd
   * @param {String} email user's mail adress
   * @param {String} password User's password
   * @param {Object} gouts User's nutrition preferences, example : {"sugar":"no"}
   */
  constructor(id, firstname, lastname, birthdate, email, password, gouts) {
    this._id = id;
    this._firstname = firstname;
    this._lastname = lastname;
    this._birthdate = birthdate;
    this._email = email;
    this._password = password;
    this._gouts = gouts;

    const API = new api();

    this._favorite_recipes = [];
    this._todo_recipes = [];
  }

  /**
   * A function with the aim to get the user's favorite recipes of course it re assign it to the attribut of the user
   * @returns {Array} The favorite recipes in an array
   */
  async getUserFavoriteRecipes() {
    const API = new api();
    this._favorite_recipes = await API.getUserFavoriteRecipes(this._id);
    return this._favorite_recipes;
  }

  /**
   * A function with the aim to get the user's todo recipes of course it re assign it to the attribut of the user
   * @returns {Array} The todo recipes in an array containing dictionnaries with this structure {date:<meal_date>,recipe:<Object Recipe>}
   */
  async getUserTodoRecipes() {
    const API = new api();
    this._todo_recipes = await API.getUserTodoRecipes(this._id);
    return this._todo_recipes;
  }

  /**
   * Add a recipe to the user's favorite recipes
   * @param {Number} recipe_id Recipe Id
   * @param {String} recette_name Recipe's name
   * @returns {Array} The favorite recipes in an array
   */
  async addFavoriteRecipe(recipe_id, recette_name) {
    const API = new api();
    await API.addFavoriteRecipe(this._id, recipe_id, recette_name);
    await this.getUserFavoriteRecipes();
  }

  /**
   * Add a recipe to the user's favorite recipes
   * @param {Number} recipe_id Recipe Id
   * @param {String} recette_name Recipe's name
   * @param {Date} meal_date Date where the user will do the recipe date should be : addTodoRecipe(... , ... , new Date(year, month-1, day))
   * @returns {Array} The favorite recipes in an array
   */
  async addTodoRecipe(recipe_id, recette_name, meal_date) {
    console.log(meal_date);
    const API = new api();
    await API.addTodoRecipe(
      this._id,
      recipe_id,
      recette_name,
      meal_date.toISOString().split("T")[0]
    );
    await this.getUserTodoRecipes();
  }
  /**
   * Update of the User class
   * @param {String} firstname User's firstname
   * @param {String} lastname User's lastname
   * @param {String} birthdate User's birthdate : yyyy-mm-dd
   * @param {String} email user's mail adress
   * @param {String} password User's password
   * @param {Object} gouts User's nutrition preferences, example : {"sugar":"no"}
   */
  updateProfile(firstname, lastname, birthdate, email, password, gouts) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._birthdate = birthdate;
    this._email = email;
    this._password = password;
    this._gouts = gouts;
  }

  getid() {
    return this._id;
  }

  get firstname() {
    return this._firstname;
  }
  get lastname() {
    return this._lastname;
  }
  get birthdate() {
    return this._birthdate;
  }
  get email() {
    return this._email;
  }
  get password() {
    return this._password;
  }
  get gouts() {
    return this._gouts;
  }

  set firstname(firstname) {
    this._firstname = firstname;
  }
  set lastname(lastname) {
    this._lastname = lastname;
  }
  set birthdate(birthdate) {
    this._birthdate = birthdate;
  }
  set email(email) {
    this._email = email;
  }
  set password(password) {
    this._password = password;
  }
  set gouts(gouts) {
    this._gouts = gouts;
  }
}

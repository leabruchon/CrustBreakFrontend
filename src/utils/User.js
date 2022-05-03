import { api, api } from "./api";
import { Recipe } from "./Recipe";

export class User {
  /**
   * A function with the aim to add the user to the api
   * @param {Number} id User's id
   * @param {String} firstname User's firstname
   * @param {String} lastname User's lastname
   * @param {String} birthdate User's birthdate : yyyy-mm-dd
   * @param {String} email user's mail adress
   * @param {String} password User's password
   * @param {object} gouts User's nutrition preferences, example : {"sugar":"no"}
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

    this._favorite_recipes = await API.getUserFavoriteRecipes(this._id);
    this._todo_recipes = await API.getUserTodoRecipes(this._id);
  }

  async getUserFavoriteRecipes(){
    const API = new api();
    this._favorite_recipes = await API.getUserFavoriteRecipes(this._id)
    return this._favorite_recipes;
  }

  async getUserFavoriteRecipes(){
    const API = new api();
    this._todo_recipes = await API.getUserTodoRecipes(this._id)
    return this._todo_recipes;

  }

  addFavoriteRecipe(recipe_id) {}

  get id() {
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

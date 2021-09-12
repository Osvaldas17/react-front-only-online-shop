import { types } from "./consts";

const showLoginWindow = () => ({
  type: types.SHOW_LOGIN_WINDOW,
});
const hideLoginWindow = () => ({
  type: types.HIDE_LOGIN_WINDOW,
});
const showRegisterWindow = () => ({
  type: types.SHOW_REGISTER_WINDOW,
});
const hideRegisterWindow = () => ({
  type: types.HIDE_REGISTER_WINDOW,
});
const resetError = () => ({
  type: types.RESET_ERROR,
});
const register = (payload = {}) => ({
  type: types.REGISTER_USER,
  payload,
});
const login = (payload = {}) => ({
  type: types.LOGIN_USER,
  payload,
});
const logOut = (payload = {}) => ({
  type: types.LOG_OUT,
  payload,
});
const uploadItem = (payload = {}) => ({
  type: types.ADD_ITEM,
  payload,
});
const removeItem = (payload = {}) => ({
  type: types.REMOVE_ITEM,
  payload,
});
const addRemoveFavourites = (payload = {}) => ({
  type: types.ADD_REMOVE_FAVOURITES,
  payload,
});
const addToCart = (payload = {}) => ({
  type: types.ADD_TO_CART,
  payload,
});
const removeFromCart = (payload = {}) => ({
  type: types.REMOVE_FROM_CART,
  payload,
});
const showSearchBar = () => ({
  type: types.SHOW_SEARCHBAR,
});
const hideSearchBar = () => ({
  type: types.HIDE_SEARCHBAR,
});

export const actions = {
  showLoginWindow,
  hideLoginWindow,
  showRegisterWindow,
  hideRegisterWindow,
  login,
  register,
  logOut,
  resetError,
  uploadItem,
  removeItem,
  addRemoveFavourites,
  addToCart,
  removeFromCart,
  showSearchBar,
  hideSearchBar,
};

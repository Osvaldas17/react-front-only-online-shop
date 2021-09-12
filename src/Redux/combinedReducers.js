import { combineReducers } from "redux";
import { handleUser, handleShop, handleSearchBar } from "./reducer";

export const RootReducer = combineReducers({
  handleUser: handleUser,
  handleShop: handleShop,
  handleSearchBar: handleSearchBar,
});

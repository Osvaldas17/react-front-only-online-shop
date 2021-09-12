import _ from "lodash";
import { types } from "./consts";
import { fakeShoppingList } from "../Assets/fakeShoppingList";

export const handleShop = (
  state = {
    shoppingList: [...fakeShoppingList],
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_ITEM:
      if (
        state.shoppingList.find(
          (item) => item.id.toString() === payload.id.toString()
        )
      ) {
        const itemIndex = state.shoppingList.findIndex(
          (i) => i.id.toString() === payload.id.toString()
        );
        state.shoppingList[itemIndex] = payload;
        return {
          ...state,
          shoppingList: [...state.shoppingList],
        };
      } else
        return { ...state, shoppingList: [...state.shoppingList, payload] };

    case types.REMOVE_ITEM: {
      return {
        ...state,
        shoppingList: [
          ...state.shoppingList.filter((item) => item.id !== payload.id),
        ],
      };
    }
    default:
      return state;
  }
};
export const handleSearchBar = (
  state = {
    searchBar: false,
  },
  action
) => {
  const { type } = action;
  switch (type) {
    case types.HIDE_SEARCHBAR: {
      return { ...state, searchBar: false };
    }
    case types.SHOW_SEARCHBAR: {
      return { ...state, searchBar: true };
    }
    default:
      return state;
  }
};

export const handleUser = (
  state = {
    users: [],
    currentUser: {
      username: "tunas",
      password: "",
      userId: 5,
      cart: [],
      saved: [],
    },
    toggleLoginWindow: null,
    toggleRegisterWindow: null,
    errorMessage: "",
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_USER: {
      const user = payload
        ? state.users.find((user) => user.username === payload.username)
        : null;
      if (user) {
        return { ...state, errorMessage: "Username is already in use" };
      } else if (payload.password !== payload.password2)
        return { ...state, errorMessage: "Password doesnt match" };
      else
        return {
          ...state,
          toggleRegisterWindow: null,
          toggleLoginWindow: true,
          errorMessage: "",
          users: [
            ...state.users,
            {
              username: payload.username,
              password: payload.password,
              userId: _.uniqueId(),
              cart: [],
              saved: [],
            },
          ],
        };
    }
    case types.LOGIN_USER: {
      const user = payload
        ? state.users.find((user) => user.username === payload.username)
        : null;
      if (user && user.password === payload.password) {
        state.currentUser = user;
        return {
          ...state,
          currentUser: user,
          toggleLoginWindow: null,
          errorMessage: "",
        };
      } else {
        return { ...state, errorMessage: "Wrong username or password" };
      }
    }
    case types.LOG_OUT: {
      const itemIndex = state.users.findIndex(
        (user) => user.userId.toString() === payload.userId.toString()
      );
      state.users[itemIndex] = state.currentUser;
      return {
        ...state,
        users: [...state.users],
        currentUser: {},
      };
    }
    case types.SHOW_LOGIN_WINDOW:
      return {
        ...state,
        toggleLoginWindow: true,
        toggleRegisterWindow: null,
        errorMessage: "",
      };
    case types.HIDE_LOGIN_WINDOW:
      return { ...state, toggleLoginWindow: null };
    case types.SHOW_REGISTER_WINDOW:
      return {
        ...state,
        toggleRegisterWindow: true,
        toggleLoginWindow: null,
        errorMessage: "",
      };
    case types.HIDE_REGISTER_WINDOW:
      return { ...state, toggleRegisterWindow: null };
    case types.RESET_ERROR:
      return { ...state, errorMessage: "" };
    case types.ADD_REMOVE_FAVOURITES:
      if (!state.currentUser.saved.find((e) => e.id === payload.id)) {
        return {
          ...state,
          currentUser: {
            ...state.currentUser,
            saved: [...state.currentUser.saved, payload],
          },
        };
      } else {
        return {
          ...state,
          currentUser: {
            ...state.currentUser,
            saved: [
              ...state.currentUser.saved.filter(
                (item) => item.id !== payload.id
              ),
            ],
          },
        };
      }
    case types.ADD_TO_CART:
      const cartItem = state.currentUser.cart.find((e) => e.id === payload.id);
      if (!cartItem) {
        return {
          ...state,
          currentUser: {
            ...state.currentUser,
            cart: [
              ...state.currentUser.cart,
              {
                ...payload,
                quantity: 1,
                totalPrice: payload.price,
              },
            ],
          },
        };
      } else {
        cartItem.quantity += 1;
        cartItem.totalPrice = cartItem.quantity * payload.price;
        return {
          ...state,
          currentUser: {
            ...state.currentUser,
            cart: [...state.currentUser.cart],
          },
        };
      }
    case types.REMOVE_FROM_CART:
      const cartItemToRemove = state.currentUser.cart.find(
        (e) => e.id === payload.id
      );
      if (cartItemToRemove && cartItemToRemove.quantity > 1) {
        cartItemToRemove.quantity -= 1;
        cartItemToRemove.totalPrice = cartItemToRemove.quantity * payload.price;
        return {
          ...state,
          currentUser: {
            ...state.currentUser,
            cart: [...state.currentUser.cart],
          },
        };
      } else {
        return {
          ...state,
          currentUser: {
            ...state.currentUser,
            cart: [
              ...state.currentUser.cart.filter(
                (item) => item.id !== payload.id
              ),
            ],
          },
        };
      }
    default:
      return state;
  }
};

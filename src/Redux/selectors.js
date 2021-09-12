const toggleLoginWindow = ({ handleUser }) => handleUser.toggleLoginWindow;
const toggleRegisterWindow = ({ handleUser }) =>
  handleUser.toggleRegisterWindow;
const users = ({ handleUser }) => handleUser.users;
const currentUser = ({ handleUser }) => handleUser.currentUser;
const errorMessage = ({ handleUser }) => handleUser.errorMessage;
const shoppingList = ({ handleShop }) => handleShop.shoppingList;
const searchBarToggle = ({ handleSearchBar }) => handleSearchBar.searchBar;

const selectors = {
  toggleLoginWindow,
  toggleRegisterWindow,
  users,
  currentUser,
  errorMessage,
  shoppingList,
  searchBarToggle,
};

export default selectors;

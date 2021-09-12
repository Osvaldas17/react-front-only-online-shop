import {
  FaUserCircle,
  FaShoppingCart,
  FaHeart,
  FaShoppingBag,
} from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { actions } from "../../Redux/actions";
import selectors from "../../Redux/selectors";

import "./navBar.css";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(selectors.currentUser);

  return (
    <div className="navBarWrapper">
      <div className="navContainer">
        <div
          className="logoContainer"
          onClick={() => {
            history.push("/");
          }}
        >
          <img
            src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
            alt=""
          />
        </div>
        <div
          className="homeBtnSmScreen"
          onClick={() => {
            history.push("/");
          }}
        >
          <FiHome />
        </div>
        <SearchBar />
        <div className="userContainer">
          {currentUser.username ? (
            <div
              className="cartInner"
              onClick={() => {
                history.push("/shopping-cart");
              }}
            >
              <span className="userText">Cart</span>
              <span className="cartIcon">
                <FaShoppingCart />
              </span>
            </div>
          ) : null}
          <div className="user">
            <div className="userInner">
              {currentUser.username ? (
                <span className="userText userTextSm">
                  {currentUser.username}
                </span>
              ) : (
                <span className="userText userTextSm">Sign in</span>
              )}
              <span className="userIcon">
                <FaUserCircle />
              </span>
            </div>
            <div className="dropDownUser userText">
              {currentUser.username ? (
                <div>
                  <div
                    className="dropDownSection cart-sm-screen"
                    onClick={() => {
                      history.push("/cart");
                    }}
                  >
                    <FaShoppingBag className="m10" />
                    <span>Cart</span>
                  </div>
                  <div
                    className="dropDownSection"
                    onClick={() => {
                      history.push("/your-uploads");
                    }}
                  >
                    <FaShoppingBag className="m10" />
                    <span>Your items</span>
                  </div>
                  <div
                    className="dropDownSection"
                    onClick={() => {
                      history.push("/saved");
                    }}
                  >
                    <FaHeart className="m10" />
                    <span>Saved</span>
                  </div>
                  <div
                    className="dropDownSection"
                    onClick={() => {
                      history.push("/upload-item");
                    }}
                  >
                    <FaShoppingBag className="m10" />
                    <span>Upload item</span>
                  </div>
                </div>
              ) : null}
              {currentUser.username ? (
                <div className="bottomPartUserDropDown">
                  <div
                    onClick={() => {
                      dispatch(actions.logOut(currentUser));
                      history.push("/");
                    }}
                    className="button"
                  >
                    <span>LOG OUT</span>
                  </div>
                </div>
              ) : (
                <div className="bottomPartUserDropDown">
                  <div className="newUserRegister">
                    <span className="newUserQuestion">
                      If you are a new user ?{" "}
                    </span>
                    <span
                      onClick={() => {
                        dispatch(actions.showRegisterWindow());
                      }}
                      className="registerBtn"
                    >
                      Register
                    </span>
                  </div>
                  <div
                    onClick={() => {
                      dispatch(actions.showLoginWindow());
                    }}
                    className="button"
                  >
                    <span>LOGIN</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

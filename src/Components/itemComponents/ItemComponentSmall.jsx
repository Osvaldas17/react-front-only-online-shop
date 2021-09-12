import "./itemComponents.css";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import selectors from "../../Redux/selectors";
import { actions } from "../../Redux/actions";
import { useHistory } from "react-router";

export default function ItemComponentSmall({ item }) {
  const user = useSelector(selectors.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="shoppingListtemContainer">
      <div onClick={() => history.push(`/single-item/${item.id}`)}>
        <img
          className="shoppingListItemImage"
          src={item.photos[0].url}
          alt=""
        />
        <p className="shoppingListItemText textOverflowing">{item.username}</p>
        <p className="shoppingListItemText textOverflowing">{item.title}</p>
        <p className="shoppingListItemText textOverflowing">{item.price} $</p>
      </div>
      {user.username ? (
        <div className="cartSaveIconsContainer">
          {user.userId !== item.userId ? (
            <FaHeart
              className="saveIcon"
              style={{
                color: user.saved.find((e) => e.id === item.id)
                  ? "rgb(228, 0, 70)"
                  : null,
              }}
              onClick={() => dispatch(actions.addRemoveFavourites(item))}
            />
          ) : null}
          {user.userId !== item.userId ? (
            <div>
              {user.cart.find((i) => i.id === item.id) ? (
                <div
                  className="cartIconContainer"
                  onClick={() => dispatch(actions.removeFromCart(item))}
                >
                  <span>Remove from </span>
                  <FaShoppingCart />
                </div>
              ) : (
                <div
                  className="cartIconContainer"
                  onClick={() => dispatch(actions.addToCart(item))}
                >
                  <span>add to </span>
                  <FaShoppingCart />
                </div>
              )}
            </div>
          ) : null}
        </div>
      ) : null}
      {user.username && user.userId === item.userId ? (
        <div className="cartSaveIconsContainer">
          <div
            className="cartIconContainer"
            onClick={() => history.push(`/edit-item/${item.id}`)}
          >
            <RiEdit2Fill />
          </div>
          <div
            className="cartIconContainer"
            onClick={() => dispatch(actions.removeItem(item))}
          >
            <RiDeleteBin6Fill />
          </div>
        </div>
      ) : null}
    </div>
  );
}

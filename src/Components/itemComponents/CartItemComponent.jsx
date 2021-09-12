import "./itemComponents.css";
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import selectors from "../../Redux/selectors";
import { actions } from "../../Redux/actions";
import { useState } from "react";
import { useHistory } from "react-router";

export default function CartItemComponent({ item }) {
  const user = useSelector(selectors.currentUser);
  const dispatch = useDispatch();
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const history = useHistory();

  return (
    <div className="cartItemContainer">
      <div className="cartImageMainContainer">
        <div className="cartImageContainer">
          <BiLeftArrow
            className="cartItemArrows"
            onClick={() => {
              if (currentPhoto > 0) setCurrentPhoto((x) => x - 1);
            }}
          />
          <img
            className="cartComponentImage"
            src={item.photos[currentPhoto].url}
            alt=""
          />
          <BiRightArrow
            className="cartItemArrows"
            onClick={() => {
              if (item.photos.length - 1 > currentPhoto)
                setCurrentPhoto((x) => x + 1);
            }}
          />
        </div>
        <div className="cartSaveIconContainer">
          {user.username ? (
            <FaHeart
              className="saveIconCart"
              style={{
                color: user.saved.find((e) => e.id === item.id)
                  ? "rgb(228, 0, 70)"
                  : null,
              }}
              onClick={() => dispatch(actions.addRemoveFavourites(item))}
            />
          ) : null}
        </div>
      </div>
      <div className="m5 cartItemTextSections">
        <span>Username:</span>
        <p className="shoppingListItemText">{item.username}</p>
        <span>Item:</span>
        <div className="d-flex">
          <p
            className="shoppingListItemText itemLink"
            onClick={() => history.push(`/single-item/${item.id}`)}
          >
            {item.title}
          </p>
        </div>
      </div>
      <div className="m5 cartItemTextPriceQuantitySections">
        <span>Unit Price:</span>
        <p className="shoppingListItemText">{item.price} $</p>
      </div>
      <div className="m5 cartItemTextPriceQuantitySections">
        <span>Total:</span>
        <p className="shoppingListItemText">{item.totalPrice} $</p>
      </div>
      <div className="m5 cartItemTextPriceQuantitySections">
        <span>Quantity:</span>
        <p className="shoppingListItemText">{item.quantity}</p>
        <FaPlus
          className="cartPlusMinus"
          onClick={() => dispatch(actions.addToCart(item))}
        />
        <FaMinus
          className="cartPlusMinus"
          onClick={() => dispatch(actions.removeFromCart(item))}
        />
      </div>
    </div>
  );
}

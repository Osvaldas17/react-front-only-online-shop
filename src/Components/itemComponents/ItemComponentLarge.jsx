import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import selectors from "../../Redux/selectors";
import { actions } from "../../Redux/actions";
import { useHistory, useParams } from "react-router";

export default function ItemComponentLarge() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const shoppingList = useSelector(selectors.shoppingList);
  const user = useSelector(selectors.currentUser);
  const singleItem = shoppingList.find(
    (i) => i.id.toString() === id.toString()
  );

  return (
    <div className="singleLargeItemContainer">
      <div className="singleLargeItemImageContainer">
        {singleItem.photos.map((e, index) => (
          <img
            className="itemLargeComponentImage"
            src={e.url}
            alt=""
            key={index}
          />
        ))}
      </div>
      <div className="singleItemCompIconSectionContainer border-bottom-1">
        <div className="textSectionContainer">
          <p>Uploaded by:</p>
          <span className="singleItemLargeText">{singleItem.username}</span>
        </div>
        {user.username ? (
          <div className="iconContainerSingleItem">
            {user.userId !== singleItem.userId ? (
              <FaHeart
                className="iconSingleItem"
                style={{
                  color: user.saved.find((e) => e.id === singleItem.id)
                    ? "rgb(228, 0, 70)"
                    : null,
                }}
                onClick={() =>
                  dispatch(actions.addRemoveFavourites(singleItem))
                }
              />
            ) : null}
            <div></div>
            {user.userId !== singleItem.userId ? (
              <div>
                {user.cart.find((i) => i.id === singleItem.id) ? (
                  <div
                    className="iconContainerSingleItem iconSingleItem"
                    onClick={() => dispatch(actions.removeFromCart(singleItem))}
                  >
                    <span className="text1">Remove from</span>
                    <FaShoppingCart className="m5" />
                  </div>
                ) : (
                  <div
                    className="iconContainerSingleItem iconSingleItem"
                    onClick={() => dispatch(actions.addToCart(singleItem))}
                  >
                    <span className="text1">add to </span>
                    <FaShoppingCart className="m5" />
                  </div>
                )}
              </div>
            ) : null}
          </div>
        ) : null}
        {user.username && user.userId === singleItem.userId ? (
          <div className="iconContainerSingleItem">
            <RiEdit2Fill
              className="iconSingleItem"
              onClick={() => history.push(`/edit-item/${singleItem.id}`)}
            />
            <div
              className="iconContainerSingleItem iconSingleItem"
              onClick={() => {
                dispatch(actions.removeItem(singleItem));
                history.push("/");
              }}
            >
              <RiDeleteBin6Fill className="m5" />
            </div>
          </div>
        ) : null}
      </div>
      <div className="textSectionContainer border-bottom-1 breakWordAll">
        <p>Item: </p>
        <span className="singleItemLargeText">{singleItem.title}</span>
      </div>
      <div className="textSectionContainer border-bottom-1 breakWordAll">
        <p>Description: </p>
        <span className="singleItemLargeText">{singleItem.description}</span>
      </div>
      <div className="textSectionContainer">
        <p>Price: </p>
        <span className="singleItemLargeText">{singleItem.price} $</span>
      </div>
    </div>
  );
}

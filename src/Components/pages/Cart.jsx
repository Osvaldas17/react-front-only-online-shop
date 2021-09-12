import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./pages.css";
import selectors from "../../Redux/selectors";
import CartItemComponent from "../itemComponents/CartItemComponent";

export default function Cart() {
  const user = useSelector(selectors.currentUser);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    setTotalSum(
      user.cart.reduce(
        (accumulator, current) => accumulator + current.totalPrice,
        0
      )
    );
  }, [user.cart, totalSum]);

  return (
    <div className="mainContainerWrapper">
      <div className="mainContainer">
        <div className="cartMainContainer">
          {user.cart.map((item, index) => (
            <CartItemComponent item={item} key={index} />
          ))}
          {totalSum > 0 ? (
            <div className="cartTotals">
              <h2>Total: {Number(totalSum).toFixed(2)} $</h2>
            </div>
          ) : (
            <div className="cartTotals">
              <h2>Cart is empty</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

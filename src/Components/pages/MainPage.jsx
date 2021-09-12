import { useSelector } from "react-redux";
import "./pages.css";
import selectors from "../../Redux/selectors";
import ItemComponentSmall from "../itemComponents/ItemComponentSmall";

export default function MainPage() {
  const shoppingList = useSelector(selectors.shoppingList);

  return (
    <div className="mainContainerWrapper">
      <div className="mainContainer">
        {shoppingList.map((item, index) => (
          <ItemComponentSmall item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

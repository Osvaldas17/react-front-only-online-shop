import { useSelector } from "react-redux";
import "./pages.css";
import selectors from "../../Redux/selectors";
import ItemComponentSmall from "../itemComponents/ItemComponentSmall";

export default function YourUploads() {
  const shoppingList = useSelector(selectors.shoppingList);
  const user = useSelector(selectors.currentUser);
  const userUploads = shoppingList.filter((i) => i.userId === user.userId);

  return (
    <div className="mainContainerWrapper">
      <div className="mainContainer">
        {userUploads.map((item, index) => (
          <ItemComponentSmall item={item} key={index} />
        ))}
        {userUploads.length < 1 ? (
          <div className="noSavedItems">
            <h2>You dont have any uploads</h2>
          </div>
        ) : null}
      </div>
    </div>
  );
}

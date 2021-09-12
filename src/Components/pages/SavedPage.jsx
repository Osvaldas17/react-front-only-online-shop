import { useSelector } from "react-redux";
import "./pages.css";
import selectors from "../../Redux/selectors";
import ItemComponentSmall from "../itemComponents/ItemComponentSmall";

export default function SavedPage() {
  const user = useSelector(selectors.currentUser);

  return (
    <div className="mainContainerWrapper">
      <div className="mainContainer">
        {user.saved.map((item, index) => (
          <ItemComponentSmall item={item} key={index} />
        ))}
        {user.saved.length ? null : (
          <div className="noSavedItems">
            <h2>You dont have any items saved</h2>
          </div>
        )}
      </div>
    </div>
  );
}

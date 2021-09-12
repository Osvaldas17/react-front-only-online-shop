import "./pages.css";
import ItemComponentLarge from "../itemComponents/ItemComponentLarge";

export default function SingleItemPage() {
  return (
    <div className="mainContainerWrapper">
      <div className="mainContainer">
        <ItemComponentLarge />
      </div>
    </div>
  );
}

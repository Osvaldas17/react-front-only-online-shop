import { useSelector } from "react-redux";
import { useParams } from "react-router";
import UploadForm from "../itemComponents/UploadForm";
import selectors from "../../Redux/selectors";

export default function EditPage() {
  const { id } = useParams();
  const shoppingList = useSelector(selectors.shoppingList);
  const itemToEdit = shoppingList.find(
    (e) => e.id.toString() === id.toString()
  );

  return (
    <div>
      <UploadForm
        photosArr={itemToEdit.photos}
        titleValue={itemToEdit.title}
        descriptionValue={itemToEdit.description}
        priceValue={itemToEdit.price}
        id={itemToEdit.id}
      />
    </div>
  );
}

// photosArr,photoInputValu,titleValue,descriptionValue,priceValue

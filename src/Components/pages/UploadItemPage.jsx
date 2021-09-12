import _ from "lodash";
import UploadForm from "../itemComponents/UploadForm";

export default function UploadItemPage() {
  return (
    <div>
      <UploadForm
        photosArr={[]}
        photoInputValu={""}
        titleValue={""}
        descriptionValue={""}
        priceValue={0}
        id={_.uniqueId()}
      />
    </div>
  );
}

// photosArr,photoInputValu,titleValue,descriptionValue,priceValue

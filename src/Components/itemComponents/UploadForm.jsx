import _ from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import selectors from "../../Redux/selectors";
import { actions } from "../../Redux/actions";
import { useHistory } from "react-router";

export default function UploadForm({
  photosArr,
  titleValue,
  descriptionValue,
  priceValue,
  id,
}) {
  const dispatch = useDispatch();
  const user = useSelector(selectors.currentUser);
  const [photos, setPhotos] = useState(photosArr);
  const [photoInput, setPhotoInput] = useState("");
  const [title, setTitle] = useState(titleValue);
  const [description, setDescription] = useState(descriptionValue);
  const [price, setPrice] = useState(priceValue);
  const [error, setError] = useState("");
  const history = useHistory();

  const upload = () => {
    const item = {
      username: user.username,
      title: title,
      description: description,
      photos: photos,
      price: Number(price).toFixed(2),
      id: id,
      userId: user.userId,
    };
    if (fieldValidation()) {
      dispatch(actions.uploadItem(item));
      history.push(`/single-item/${id}`);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setError("");
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  const imageValidation = (image_url) => {
    const http = new XMLHttpRequest();
    http.open("HEAD", image_url, false);
    http.send();
    return http.status !== 404;
  };

  const fieldValidation = () => {
    if (title.trim().length < 10 || title.trim().length > 100)
      setError("title lenght should be between 10 to 100 characters");
    else if (description.trim().length < 30 || description.length > 400)
      setError("description lenght should be between 30 to 200 characters");
    else if (photos.length < 1)
      setError("there should be atleast one photo uploaded");
    else if (price <= 0) setError("please enter correct price");
    else {
      setError("");
      return true;
    }
  };

  return (
    <div className="mainContainerWrapper">
      <div className="mainContainer">
        <div className="itemInputContainer">
          <h3>Please fill the form</h3>
          <div className="errorWrapper">
            {error ? <span className="uploadValidation">{error}</span> : null}
          </div>
          <input
            type="text"
            placeholder="Tittle"
            value={title}
            maxLength="100"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength="400"
          />
          <input
            type="number"
            placeholder="Enter price $$"
            maxLength="10"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={photoInput}
            maxLength="500"
            onChange={(e) => {
              setPhotoInput(e.target.value);
            }}
          />
          <div
            className="button"
            onClick={() => {
              if (imageValidation(photoInput)) {
                if (photos.length < 10) {
                  setPhotos([...photos, { url: photoInput, id: _.uniqueId() }]);
                  setPhotoInput("");
                } else {
                  setError("Photo limit reached");
                }
              } else {
                setError("Please enter valid img url");
              }
            }}
          >
            ADD PHOTO
          </div>
          <div>
            <h3>click on photo to remove(max 10 images)</h3>
          </div>
          <div className="addedPhotosContainer">
            {photos.map((item, index) => {
              return (
                <img
                  onClick={() => {
                    setPhotos(() => {
                      const filtered = photos.filter((i) => i.id !== item.id);
                      return [...filtered];
                    });
                  }}
                  className="addedPhotoInUpload"
                  src={item.url}
                  alt=""
                  key={index}
                />
              );
            })}
          </div>
          <div className="button" onClick={() => upload()}>
            UPLOAD
          </div>
        </div>
      </div>
    </div>
  );
}

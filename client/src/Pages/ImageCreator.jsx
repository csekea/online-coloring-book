import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../Components/Image";
import Palette from "../Components/Palette";

const ImageCreator = () => {
  const [currentColor, setCurrentColor] = useState('blue');
  const [fillColors, setFillColors] = useState({});

  const navigate = useNavigate();

  const onFill = (id) => {
    console.log(id);
    let newFillColors = { ...fillColors, [id]: currentColor };
    setFillColors(newFillColors);
  }

  const saveImage = async () => {
    if (Object.keys(fillColors).length === 0) {
      return
    }
    await fetch("http://127.0.0.1:8080/api/colorings/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fillColors),
    }).then(() => navigate("/"));
  };

  const cancelCreation = () => {
    navigate("/");
  }

  return (
    <div className="image-editor-div">
      <div className="image-editor-container-div" >
        <Palette setCurrentColor={setCurrentColor} />
        <div>
          <Image view="large" fillColors={fillColors} onFill={onFill} />
          <div className="image-button-div">
            <button onClick={saveImage}>Save image</button>
            <button onClick={cancelCreation}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageCreator;
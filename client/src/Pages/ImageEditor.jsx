import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Image from "../Components/Image";
import Palette from "../Components/Palette";

const ImageEditor = () => {
  const [currentColor, setCurrentColor] = useState('blue');
  const [fillColors, setFillColors] = useState({});
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/api/colorings/${id}`).
      then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImageData(data);
        setFillColors(data.colors)
        setLoading(false);
      });

  }, [])



  const onFill = (id) => {
    console.log(id);
    let newFillColors = { ...fillColors, [id]: currentColor };
    setFillColors(newFillColors);
  }

  const saveImage = async () => {
    if (Object.keys(fillColors).length === 0) {
      return
    }
    await fetch(`http://127.0.0.1:8080/api/colorings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fillColors),
    }).then(() => navigate("/"));

  };

  const deleteImage = async () => {
    await fetch(`http://127.0.0.1:8080/api/colorings/${id}`, {
      method: "DELETE"
    }).then((res) => res.json())
      .then(() => navigate("/"));
  }

  if (loading) {
    return (<h2>Loading...</h2>)
  }

  return (
    <div className="image-editor-div">
      <div className="image-editor-container-div" >
        <Palette setCurrentColor={setCurrentColor} />
        <div>
          <Image view="large" fillColors={fillColors} onFill={onFill} />
          <div className="image-button-div">
            <button onClick={saveImage}>Save image</button>
            <button onClick={deleteImage}>Delete image</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageEditor;
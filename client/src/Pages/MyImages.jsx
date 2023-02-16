import { useEffect, useState } from "react";
import ImageTiles from "../Components/ImageTiles";

const MyImages = () => {

  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/colorings/").
      then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImageData(data);
        setLoading(false);
      });

  }, [])

  if (loading) {
    return (<h2>Loading...</h2>)
  }

  return (
    <div>
      <ImageTiles images={imageData} currentPage="my-images" />
    </div>
  )
}

export default MyImages;
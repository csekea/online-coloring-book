import { Link } from "react-router-dom";
import Image from "./Image";

const ImageTiles = ({ images, currentPage }) => {
  return (
    <div className="image-tiles-div">
      {images.map((image) => (
        <Link
          className="link"
          to={currentPage === "home" ? "/image-creator" : `/image-editor/${image._id}`}
          key={image.date}>
          <div className="centered">
            <Image view="tile" fillColors={image.colors} />
            <p>{image.date}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ImageTiles;
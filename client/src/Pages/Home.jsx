import ImageTiles from "../Components/ImageTiles";

const Home = () => {
  const defaultImage = [{
    date: null,
    colors: {}
  }]
    ;
  return (
    <div>
      <ImageTiles images={defaultImage} currentPage={"home"} />
    </div>
  )
}

export default Home;
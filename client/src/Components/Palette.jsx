const Palette = ({ setCurrentColor }) => {

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'turquoise', 'purple', 'pink', 'white', 'black'];

  return (
    <div className="palette-div">
      {colors.map(color => (
        <div
          key={color}
          className="palette-color-div"
          style={{ backgroundColor: color }}
          onClick={() => setCurrentColor(color)}
        ></div>

      ))}
    </div>
  )
}

export default Palette;
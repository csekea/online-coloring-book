import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="header-link" to="/"><span className="header-title">Coloring book</span></Link>
      <div className="nav-container">
        <Link className="header-link" to="/"><span className="nav-link">Home</span></Link>
        <Link className="header-link" to="/my-images"><span className="nav-link">My images</span></Link>
      </div>
    </header>
  )
}

export default Header;
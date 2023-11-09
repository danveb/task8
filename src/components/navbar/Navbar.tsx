import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"; 
import "../../styles/navbar/Navbar.css"; 

export default function Navbar() {
  return (
    <header>
      <nav className="nav__links">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
   <nav>
        <ul>
            <li>
                <Link to="/" className="Home-btn">Home</Link>
            </li>
        </ul>
   </nav>
  )
}

export default NavBar
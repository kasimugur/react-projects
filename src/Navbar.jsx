import { NavLink } from "react-router-dom";
import './css/navbar.css'
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="header-nav">
          <NavLink className="header-link" to={'/'} >projects</NavLink>
</div>
          <div className="navbar-nav">
            <NavLink className="nav-link" to={'/numberRandom'} > a random number</NavLink>
            <NavLink className="nav-link" to={'/todoList'} > todo list </NavLink>
          

        </div>

      </nav>
    </>
  )
}
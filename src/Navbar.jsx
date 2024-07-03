import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav style={{}}>
        <div className="header-nav">
          <NavLink to={'/'} >projects</NavLink>

          <div className="navbar-nav">
            <NavLink to={'/numberRandom'} > a random number</NavLink>
          </div>

        </div>

      </nav>
    </>
  )
}
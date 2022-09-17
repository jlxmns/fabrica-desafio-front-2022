import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return (
        <Fragment>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/our-animals">Our Animals</Link>
              </li>
              <li>
                <Link to="/play-game">Play Game</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </Fragment>
      );
}

export default Navbar;
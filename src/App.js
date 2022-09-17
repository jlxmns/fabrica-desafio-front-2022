import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default App;

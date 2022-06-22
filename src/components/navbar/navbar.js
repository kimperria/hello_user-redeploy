import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container container-fluid">
          <a href="#" className="navbar-brand">Hello User</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <Link to='/'>
                <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  Home
                </a>
              </li>
                </Link>


              {/* <Link to="/create">
                <li className="nav-item">
                  <a className="nav-link" href="#">Create</a>
                </li>
              </Link> */}


              <Link to="/read">
                <li className="nav-item">
                  <p className="nav-link">Read</p>
                </li>
              </Link>

              {/* <Link to="/update">
                <li className="nav-item">
                  <a className="nav-link" href="#">Update</a>
                </li>
              </Link> */}

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <a className="dropdown-item">
                            Create
                        </a>
                    </li>
                </ul>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link">Output</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

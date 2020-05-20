import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Contact
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="mailto:gusrvalenzuela@gmail.com">
                Email me 
              </a>
              <a className="dropdown-item" href="/">
                LinkedIn
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/contact">
                more...
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

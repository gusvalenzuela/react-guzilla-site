import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="sidenavbar">
      <ul className="navbar-nav mr-auto">
        <li className="">
          <a className="navbar-toggler" href="/">
            home,
          </a>
        </li>
        <li>
          <a className="navbar-toggler" href="/portfolio">
            portfolio,
          </a>
        </li>
        <li>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#sidebarMoreContent"
            aria-controls="sidebarMoreContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            contact...
          </button>
        </li>
      </ul>
      <div className="collapse navbar-collapse" id="sidebarMoreContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="" href="mailto:gusrvalenzuela@gmail.com">
              Email me
            </a>
          </li>
          <li className="nav-item">
            <a
              // className="navbar-toggler"
              href="https://linkedin.com"
            >
              <span className="fa fa-linkedin"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

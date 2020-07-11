import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="sidenavbar" id="sidenavbar">
      <ul className="navbar-nav">
        <li className="">
          <a className="navbar-togglerz" href="/">
            home,
          </a>
        </li>
        <li className="">
          <a className="navbar-togglerz" href="/#about-me">
            about,
          </a>
        </li>
        <li>
          <a className="navbar-togglerz" href="/portfolio">
            portfolio,
          </a>
        </li>
        <li>
          <a className="navbar-togglerz" href="/contact">
            contact,
          </a>
        </li>
        {/* <li>
          <a
            className="navbar-togglerz"
            data-toggle="collapse"
            data-target="#sidebarMoreContent"
            aria-controls="sidebarMoreContent"
            href="/contact"
          >
            contact,
          </a>
        </li>
        <div className="collapse navbar-collapse" id="sidebarMoreContent">
          <ul className="navbar-contact-dropdown">
            <li>
              <a href="mailto:gusrvalenzuela@gmail.com">
                <i className="fa fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/gusvalenzuela" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div> */}
        {/* <li>
          <a className="navbar-togglerz" href="/other">
            other.
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Nav;

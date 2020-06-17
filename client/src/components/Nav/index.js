import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="sidenavbar">
      <ul className="navbar-nav mr-auto">
        <li className="">
          <a className="navbar-togglerz" href="/">
            home,
          </a>
        </li>
        <li>
          <a className="navbar-togglerz" href="/portfolio">
            portfolio,
          </a>
        </li>
        <li>
          <a className="navbar-togglerz" data-toggle="collapse"
            data-target="#sidebarMoreContent"
            aria-controls="sidebarMoreContent" href="/portfolio">
            contact,
          </a>
        </li>
        <div className="collapse navbar-collapse" id="sidebarMoreContent">
          <ul className="navbar-contact-dropdown">
            <li>
              <a href="mailto:gusrvalenzuela@gmail.com">
                <span className="fa fa-envelope"></span>gusrvalenzuela@gmail.com
            </a>
            </li>
            <li>
              <a

                href="tel:+1-714-742-7119"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="fa fa-phone"></span> 714.742.7119
          </a>
            </li>
          </ul>
        </div>
      </ul>

    </nav>
  );
}

export default Nav;

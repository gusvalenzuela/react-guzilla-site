import React from "react";
import "./style.css";

function Foot() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">2020 &copy; gr\^_^/</div>
        <div className="footer-right">
          <div className="footer-icons">
            <ul className="menu simple">
              <li>
                <a
                  href="https://github.com/gusvalenzuela"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/gus-valenzuela-b73b0296/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              {/* <li>
            <a href="" target="_blank"  rel="noopener noreferrer">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li> */}
              {/* <li>
            <a href="#target-1" target="_blank"  rel="noopener noreferrer">
              <i className="fa fa-pinterest-p" aria-hidden="true"></i>
            </a>
          </li> */}
              <li>
                <a
                  href="https://twitter.com/vrsulo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">Porudly builAWj</div>
    </footer>
  );
}

export default Foot;

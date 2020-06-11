import React from "react";
import "./style.css";

function ResumeCard() {
  return (
    <div className="card resume-card col-12 col-md-6 col-xl-4">
      <ul>
        <li>
          <a
            className=""
            href="https://drive.google.com/file/d/1BAKRO71SHDIP6wDSVzL1A7WOHWOJBcJj/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="fa fa-file-pdf-o"></span> Resume
          </a>
        </li>

        <li>
          <a
            className=""
            href="https://github.com/gusvalenzuela"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="fa fa-github"></span> GitHub Profile
          </a>
        </li>
        <li>
          <a
            className=""
            href="https://www.linkedin.com/in/gus-valenzuela-b73b0296/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="fa fa-linkedin"></span> LinkedIn Profile
          </a>
        </li>
        <li>
          <a
            className=""
            href="mailto:gusrvalenzuela@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="fa fa-envelope-o"></span> gusrvalenzuela@gmail.com
          </a>
        </li>
        <li>
          <a
            className=""
            href="tel:+1-714-742-7119"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="fa fa-phone"></span> 714.742.7119
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ResumeCard;

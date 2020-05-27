import React from "react";
import "./style.css";

function ResumeCard() {
  return (
    <div className="card resume-card col-12 col-md-6 col-xl-4">
      <ul>
        <li>
          <a
            class=""
            href="./GustavoValenzuela_resume-2020.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span class="fa fa-file-pdf-o"></span> Resume
          </a>
        </li>

        <li>
          <a
            class=""
            href="https://github.com/gusvalenzuela"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span class="fa fa-github"></span> GitHub Profile
          </a>
        </li>
        <li>
          <a
            class=""
            href="https://www.linkedin.com/in/gus-valenzuela-b73b0296/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span class="fa fa-linkedin"></span> LinkedIn Profile
          </a>
        </li>
        <li>
          <a
            class=""
            href="mailto:gusrvalenzuela@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span class="fa fa-envelope-o"></span> gusrvalenzuela@gmail.com
          </a>
        </li>
        <li>
          <a
            class=""
            href="tel:+1-714-742-7119"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span class="fa fa-phone"></span> 714.742.7119
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ResumeCard;

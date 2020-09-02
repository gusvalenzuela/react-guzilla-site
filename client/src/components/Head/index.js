import React from "react";
import "./style.css";

function Head({ textContent }) {
  return (
    <header className="head">
      <h1 style={{ margin: 0, paddingBottom: "1rem" }}>{textContent}</h1>
    </header>
  );
}

export default Head;

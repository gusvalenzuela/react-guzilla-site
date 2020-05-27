import React from "react";
import "./style.css";

function Head({ textContent }) {
  return (
    <div className="head">
      <h1 style={{ margin: 0, paddingBottom: "1rem" }}>{textContent}</h1>
    </div>
  );
}

export default Head;

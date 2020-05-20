import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: "100%", clear: "both", paddingTop: "7rem", textAlign: "right" }}
      className="jumbotron mx-0"
    >
      {children}
    </div>
  );
}

export default Jumbotron;

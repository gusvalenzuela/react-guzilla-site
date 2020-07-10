import React from "react";
import "./style.css";

function BottomChevron({ windowWidth, visible }) {
  console.log(visible);
  return (
    <i
      className={`bottom-chevron fa fa-chevron-down ${`scrolled`}`}
      style={{
        display: `${!visible ? "none" : "inline-block"}`,
        left: `${(windowWidth - 32) / 2}px`,
      }}
    ></i>
  );
}

export default BottomChevron;

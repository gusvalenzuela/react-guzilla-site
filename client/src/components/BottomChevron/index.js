import React from "react";
import "./style.css";

function BottomChevron({ windowWidth, visible }) {
  return (
    <i
      className={`bottom-chevron fa fa-chevron-down`}
      style={{
        display: `${!visible ? "none" : "inline-block"}`,
        left: `${(windowWidth - 32) / 2}px`,
      }}
    ></i>
  );
}

export default BottomChevron;

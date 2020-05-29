import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

function SidebarToggle({ isOpen, handleOpeningSidebar, smallScreen }) {
  return (
    <button
      className={`sidebar-toggle ${
        !isOpen ? "sidebar-closed" : "sidebar-opened"
      } ${smallScreen ? "small-screen" : ""}`}
      onClick={() => handleOpeningSidebar()}
    ></button>
  );
}

export default SidebarToggle;

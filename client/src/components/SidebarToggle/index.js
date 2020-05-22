import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

function SidebarToggle({ handleOpeningSidebar }) {
  return (
    <button className="sidebar-toggle" onClick={() => handleOpeningSidebar()}>
      <i className="fa fa-arrow-left" ></i>
    </button>
  );
}

export default SidebarToggle;

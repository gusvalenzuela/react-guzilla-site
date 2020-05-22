import React from "react";
import "./style.css"

// Exporting the Card Body, Card Image, and Card Overlay components from this file

function Card({ keyz, imgSrc, children }) {
  return (
    <div key={keyz ? keyz : Date.now()} className="card bg-dark text-white rounded-0">
      <img
        className="card-img"
        src={`./assets/images/${imgSrc ? imgSrc : "defaultimage01.jpg"}`}
        alt="Serene stock background"
        style={{maxHeight:450}}
      />
      <div className="card-img-overlay">{children}</div>
    </div>
  );
}

export default Card;

import React from "react";
import "./style.css";

// Exporting the Card Body, Card Image, and Card Overlay components from this file

function Card({imgSrc, children }) {
  return (
    <div
      className="card"
    >
      <img
        className="card-img"
        src={`./assets/images/${imgSrc ? imgSrc : "defaultimage01.jpg"}`}
        alt="Serene stock background"
        style={{ minHeight: 400 }}
      />
      <div className="card-img-overlay">{children}</div>
    </div>
  );
}

export default Card;

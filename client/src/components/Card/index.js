import React from "react";
import "./style.css";

// Exporting the Card Body, Card Image, and Card Overlay components from this file

function Card({height, imgSrc, children }) {
  return (
    <div className="card col-12 col-md-6 col-xl-4">
      <img
        className="card-image"
        src={`./assets/images/${imgSrc ? imgSrc : "defaultimage01.jpg"}`}
        alt="Serene stock background"
        style={height ? { height: height } : { minHeight: 400 }}
      />
      <div className="card-img-overlay">{children}</div>
    </div>
  );
}

export default Card;

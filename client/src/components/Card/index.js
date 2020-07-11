import React from "react";
import "./style.css";
import 'lazysizes';

// Exporting the Card Body, Card Image, and Card Overlay components from this file

function Card({height, imgSrc, children }) {
  return (
    <div className="card col-12 col-md-5 col-xl-3">
      <img
        className="card-image lazyload"
        data-src={`./assets/images/${imgSrc ? imgSrc : "defaultimage01.jpg"}`}
        alt="Serene stock background"
        style={height ? { height: height } : { minHeight: 400 }}
      />
      <div className="card-img-overlay">{children}</div>
    </div>
  );
}

export default Card;

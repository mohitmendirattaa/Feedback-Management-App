import React from "react";

function Card({ reverse, children }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0, 0, 0, 0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

export default Card;

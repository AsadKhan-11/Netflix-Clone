import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <>
      <div className="card-container">
        <img className="cards-img" src={props.img} alt={props.title} />
      </div>
    </>
  );
}

export default Card;

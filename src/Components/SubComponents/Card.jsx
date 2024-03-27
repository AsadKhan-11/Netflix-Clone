import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <>
      <img src={props.img} alt="image of movies" />
    </>
  );
}

export default Card;

import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "./SubComponents/Card";
import "./Rows.css";

function Rows(props) {
  const imgURL = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    const data = async () => {
      const url = import.meta.env.REACT_APP_URL;
      const api = import.meta.env.REACT_APP_API;

      const response = await axios.get(`${url}/now_playing?api_key=${api}`);
    };
    data();
  }, []);

  return (
    <>
      <h1 className="rows-title">{props.title}</h1>

      <div className="row-cards">
        {props.arr.map((items, index) => (
          <Card
            key={index}
            img={`${imgURL}/${items.poster_path}`}
            title={items.title}
          />
        ))}
      </div>
    </>
  );
}

export default Rows;

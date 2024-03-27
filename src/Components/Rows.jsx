import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "./SubComponents/Card";

function Rows(props) {
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
      {props.arr.map((items, index) => (
        <Card key={index} img={items.poster_path} />
      ))}
    </>
  );
}

export default Rows;

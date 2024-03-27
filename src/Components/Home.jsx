import React, { useEffect } from "react";
import "./Home.css";
import axios from "axios";
import Rows from "./Rows";
import { useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const data = async () => {
      const url = import.meta.env.REACT_APP_URL;
      const api = import.meta.env.REACT_APP_API;

      const response = await axios.get(`${url}/now_playing?api_key=${api}`);

      setMovies(response.data.results);
      console.log(response.data.results);
    };
    data();
  }, []);
  return (
    <>
      <section className="home">
        <div className="img"></div>

        <Rows title="TV Shows" arr={movies} />
        {/* <Rows title="Movies" arr={movies} />
        <Rows title="My List" arr={movies} /> */}
      </section>
    </>
  );
}

export default Home;

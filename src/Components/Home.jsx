import React, { useEffect } from "react";
import "./Home.css";
import axios from "axios";
import Rows from "./Rows";
import { useState } from "react";

function Home() {
  const [topMovies, setTopMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const imgURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const url = import.meta.env.REACT_APP_URL;
    const api = import.meta.env.REACT_APP_API;
    const fetchShows = async () => {
      const response = await axios.get(`${url}/top_rated?api_key=${api}`);

      setTopMovies(response.data.results);
    };

    const fetchPopular = async () => {
      const response = await axios.get(`${url}/popular?api_key=${api}`);

      setPopular(response.data.results);
    };

    const fetchPlaying = async () => {
      const response = await axios.get(`${url}/now_playing?api_key=${api}`);

      setNowPlaying(response.data.results);
    };

    const fetchUpcoming = async () => {
      const response = await axios.get(`${url}/upcoming?api_key=${api}`);

      setUpcoming(response.data.results);
    };
    fetchShows();
    fetchPopular();
    fetchPlaying();
    fetchUpcoming();
  }, []);
  return (
    <>
      <section className="home">
        <img className="home-img" src={`${imgURL}/${popular[3].poster_path}`} />

        <div className="rows-container">
          <Rows title="Popular on Netflix" arr={popular} />
          <Rows title="TV Shows" arr={topMovies} />
          <Rows title="Now Playing" arr={nowPlaying} />
          <Rows title="Upcoming" arr={upcoming} />
        </div>
      </section>
    </>
  );
}

export default Home;

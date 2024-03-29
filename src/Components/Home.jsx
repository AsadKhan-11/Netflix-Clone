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
  const [number, setNumber] = useState(2);

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
        <div className="home-banner">
          {" "}
          <img
            className="home-img"
            src={`${imgURL}/${popular[number].poster_path}`}
          />
          <div className="home-details">
            {popular[3].original_title && (
              <h1 className="title home-txt">
                {popular[number].original_title}
              </h1>
            )}
            {popular[3].overview && (
              <p className="overview home-txt">{popular[number].overview}</p>
            )}
            <div className="btns-container">
              <button className="btns">Play</button>
              <button className="btns btn2">+ My List</button>
            </div>
          </div>
        </div>

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

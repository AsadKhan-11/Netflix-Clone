import React, { useState, useEffect } from "react";
import netflix from "../assets/Logonetflix.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <section className="section-nav">
        <img src={netflix} alt="netflix-logo" className="netflix-logo" />

        <ul className="nav-links">
          <li className="links">
            {" "}
            <a href="#home">Home</a>
          </li>
          <li className="links">
            {" "}
            <a href="#topShows"> TV Shows</a>
          </li>
          <li className="links">
            {" "}
            <a href="#nowPlaying">Movies</a>
          </li>
          <li className="links">
            {" "}
            <a href="#upcoming">My List</a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Navbar;

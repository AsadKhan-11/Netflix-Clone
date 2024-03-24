import React from "react";
import netflix from "../assets/Logonetflix.png";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <section className="section-nav">
        <img src={netflix} alt="netflix-logo" className="netflix-logo" />

        <ul className="nav-links">
          <li className="links">Home</li>
          <li className="links">TV Shows</li>
          <li className="links">Movies</li>
          <li className="links">My List</li>
        </ul>
      </section>
    </>
  );
}

export default Navbar;

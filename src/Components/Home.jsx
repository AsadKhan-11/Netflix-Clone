import React, { useEffect } from "react";
import "./Home.css";
import axios from "axios";
function Home() {
  useEffect(() => {
    const data = async () => {
      const url = import.meta.env.REACT_APP_URL;
      const api = import.meta.env.REACT_APP_API;

      const response = await axios.get(`${url}/now_playing?api_key=${api}`);
      console.log(response.data.results);
    };
    data();
  }, []);
  return (
    <>
      <section className="home">
        <div className="img"></div>
      </section>
    </>
  );
}

export default Home;

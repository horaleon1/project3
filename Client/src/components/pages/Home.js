import React from "react";
import Particles from "react-particles-js";

const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

const Home = () => {
  return (
    <div className="homeContainer">
      <Particles params={ particleOpt } />
    </div>
  );
};

export default Home;

import React from "react";
import Hero from "./Hero";
import Statistics from "./Statistics";
import Map from "./Map";

const Home = () => {
  return (
    <div className="text-2xl">
      <Hero />
      <Statistics />
      <Map />
    </div>
  );
};

export default Home;

import React from "react";
import Navigation from "../components/Navigation";
import Movie from "../components/Movie";

const Home = () => {
  return (
    <div>
      <Navigation />
      <h1>Acceuil</h1>
      <Movie />
    </div>
  );
};

export default Home;

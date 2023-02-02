import React from "react";
import "../scss/Main.scss";
import Filters from "../components/Filters";
import Header from "../components/Header";
import Navigation from "../navigation/Navigation";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Header />
      <Filters />
      <Card />
    </div>
  );
};

export default Home;

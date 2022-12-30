import React from "react";
import ExtraInfo from "../ExtraInfo/ExtraInfo";
import HomeServices from "../HomeServices/HomeServices";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <ExtraInfo />
      <HomeServices />
    </div>
  );
};

export default Home;

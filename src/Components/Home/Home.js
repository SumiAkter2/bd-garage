import React from "react";
import OurClients from "../Clients/OurClients";
import ExtraInfo from "../ExtraInfo/ExtraInfo";
import HomeServices from "../HomeServices/HomeServices";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <ExtraInfo />
      <HomeServices />
      <OurClients/>
    </div>
  );
};

export default Home;

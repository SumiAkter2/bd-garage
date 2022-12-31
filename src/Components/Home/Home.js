import React from "react";
import OurClients from "../Clients/OurClients";
import Comment from "../Comment/Comment";
import ExtraInfo from "../ExtraInfo/ExtraInfo";
import Faq from "../Faq/Faq";
import HomeServices from "../HomeServices/HomeServices";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <ExtraInfo />
      <HomeServices />
      <OurClients />
      <Comment />
      {/* <Faq /> */}
    </div>
  );
};

export default Home;

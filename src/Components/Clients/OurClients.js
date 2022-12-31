import React from "react";
import img1 from "../../img/LOGO1.png";
import img2 from "../../img/logo2.png";
import img3 from "../../img/logo3.png";
import img4 from "../../img/LOGO4.png";
import img5 from "../../img/LOGO5.png";
import img6 from "../../img/logo6.png";
const OurClients = () => {
  return (
    <div>
      <div className=" text-center my-6">
        <h1 className="lg:text-5xl text-secondary text-3xl font-bold text-center pt-12">
          OUR CLIENTS
        </h1>
        <div className="border-b-2 border-primary lg:w-32 mx-auto mt-4 w-12"></div>
        <p className="pb-6 text-success mt-4 p-3">
          ed hendrerit, diam et pellentesque aliquam, lectus ipsum maximus diam
          et pellentesque aliquam, lectus
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-2 px-24 mx-12">
          <img src={img1} className="w-28 border border-black" alt="icon" />
          <img src={img2} className="w-28 border border-black" alt="icon" />
          <img src={img3} className="w-28 border border-black" alt="icon" />
          <img src={img4} className="w-28 border border-black" alt="icon" />
          <img src={img5} className="w-28 border border-black" alt="icon" />
          <img src={img6} className="w-28 border border-black" alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default OurClients;

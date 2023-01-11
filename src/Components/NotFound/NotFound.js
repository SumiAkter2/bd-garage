import React from "react";
import banner2 from "../../img/bg.jpg";
import error from "../../img/404.jpg";
const NotFound = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner2})`,
      }}
    >
      <div className="bg-black opacity-50">
        <div className=" lg:w-96 glass lg:p-12 p-6 mx-auto">
         
            <img src={error} alt="bg-img" />
         
        </div>
      </div>
    </div>
  );
};

export default NotFound;

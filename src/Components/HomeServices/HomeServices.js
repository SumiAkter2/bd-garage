import React from "react";
import HomeServicesInfo from "./HomeServicesInfo";

const HomeServices = () => {
  return (
    <div className="bg-accent text-center">
      <h1 className="lg:text-5xl text-3xl font-bold text-center pt-12">
        OUR SERVICES
      </h1>
      <div className="border-b-2 border-primary lg:w-32 mx-auto my-4"></div>
      <p className="pb-6">
        Sed hendrerit, diam et pellentesque aliquam, lectus ipsum maximus quam,
        vitae auctor
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-y-7 gap-x-2 m-6 px-12">
        <HomeServicesInfo
          cardTitle="FINANCIAL AUDIT"
          bgClass="bg-accent hover:bg-black"
        ></HomeServicesInfo>
        <HomeServicesInfo
          cardTitle="FINANCIAL AUDIT"
          bgClass="bg-accent hover:bg-black"
        ></HomeServicesInfo>
        <HomeServicesInfo
          cardTitle="FINANCIAL AUDIT"
          bgClass="bg-accent hover:bg-black"
        ></HomeServicesInfo>
        <HomeServicesInfo
          cardTitle="FINANCIAL AUDIT"
          bgClass="bg-accent hover:bg-black"
        ></HomeServicesInfo>
        <HomeServicesInfo
          cardTitle="FINANCIAL AUDIT"
          bgClass="bg-accent hover:bg-black"
        ></HomeServicesInfo>
        <HomeServicesInfo
          cardTitle="FINANCIAL AUDIT"
          bgClass="bg-accent hover:bg-black"
        ></HomeServicesInfo>
        <HomeServicesInfo
          cardTitle="FINANCIAL AUDIT"
          bgClass="bg-accent hover:bg-black"
        ></HomeServicesInfo>
        <HomeServicesInfo
          cardTitle="FINANCIAL AUDIT"
          bgClass="bg-accent hover:bg-black"
        ></HomeServicesInfo>
      </div>
    </div>
  );
};

export default HomeServices;

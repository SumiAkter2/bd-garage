import React from "react";
import HomeServicesInfo from "./HomeServicesInfo";

const HomeServices = () => {
  return (
    <div>
      <div className="bg-accent text-center">
        <h1 className="lg:text-5xl text-3xl font-bold text-center pt-12">
          OUR SERVICES
        </h1>
        <div className="border-b-2 border-primary lg:w-32 w-12 mx-auto mt-4"></div>
        <p className="py-6 px-4">
          Sed hendrerit, diam et pellentesque aliquam, lectus ipsum maximus
          quam, vitae auctor
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5  mt-6 mx-12 px-12">
          <HomeServicesInfo
            cardTitle="​ACCOUNTING SERVICES"
            bgClass="bg-accent hover:bg-black"
          ></HomeServicesInfo>
          <HomeServicesInfo
            cardTitle="TAX SERVICES"
            bgClass="bg-accent hover:bg-black"
          ></HomeServicesInfo>
          <HomeServicesInfo
            cardTitle="BUSINESS CONSULTING"
            bgClass="bg-accent hover:bg-black"
          ></HomeServicesInfo>
          <HomeServicesInfo
            cardTitle="CORPORATE FINANCE"
            bgClass="bg-accent hover:bg-black"
          ></HomeServicesInfo>
          <HomeServicesInfo
            cardTitle="COMPANY REGISTRATION"
            bgClass="bg-accent hover:bg-black"
          ></HomeServicesInfo>
          <HomeServicesInfo
            cardTitle="LEGAL CONSULTING"
            bgClass="bg-accent hover:bg-black"
          ></HomeServicesInfo>
        </div>
      </div>
      <div className="h-32 bg-primary flex justify-center items-center p-4">
        <p>For more information Feel free to Contact with Us</p>
        <button className=" btn rounded-full hover:text-black btn-light btn-outline ml-6">
          Send Quote
        </button>
      </div>
    </div>
  );
};

export default HomeServices;

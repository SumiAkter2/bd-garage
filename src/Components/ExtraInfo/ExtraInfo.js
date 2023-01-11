import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BiBullseye } from "react-icons/bi";
import "./Extrainfo.css";
const ExtraInfo = () => {
  return (
    <div>
      <div className="lg:flex justify-center items-item my-12">
        <div className=" info-container  text-white flex lg:mx-6 mx-auto">
          <div className="w-1/2 bg-black opacity-70 lg:p-12 p-2 ">
            <h1 className="lg:text-3xl text-sm font-bold my-2 text-primary">
              How we Can help you ?
            </h1>
            <p className="flex justify-center items-stat text-sm">
              <BiBullseye size="25px" className="mr-4" /> Our consultancy amet
              consectetur adipisicing elit
            </p>
            <p className="flex justify-center items-stat text-sm">
              <BiBullseye size="20px" className="mr-4" />
              It's Our Dolor sit amet consectetur ffuikd.
            </p>
            <p className="flex justify-center items-stat text-sm">
              <BiBullseye size="20px" className="mr-4" />
              We are so Lorem ipsum dolor sit amet
            </p>
            <p className="flex justify-center items-stat text-sm">
              <BiBullseye size="20px" className="mr-4" />
              BD Garage is dolor sit amet consectetur
            </p>
            <button className="btn btn-light  btn-outline rounded-none my-4 hover:text-black">
              Read More
            </button>
          </div>
          <div className="flex-1 w-1/2"></div>
        </div>
        <div className="text-secondary text-2xl font-bold m-12 ">
          <div className="border-b-2 border-primary  flex justify-around items-center">
            <p className="bg-primary  w-12 h-12 rounded-br-3xl rounded-tl-3xl  ">
              <BsFillArrowRightCircleFill fill="white" className="m-3  " />
            </p>
            <span className="pb-6  p-4"> We Are Professionals</span>
          </div>
          <div className="border-b-2 border-primary  flex justify-around items-center">
            <p className="bg-primary  w-12 h-12 rounded-br-3xl rounded-tl-3xl  ">
              <BsFillArrowRightCircleFill fill="white" className="m-3  " />
            </p>
            <span className="pb-6  p-4"> We Are Trusted</span>
          </div>
          <div className="border-b-2 border-primary  flex justify-around items-center">
            <p className="bg-primary  w-12 h-12 rounded-br-3xl rounded-tl-3xl  ">
              <BsFillArrowRightCircleFill fill="white" className="m-3  " />
            </p>
            <span className="pb-6  p-4"> We Are Experts</span>
          </div>
        </div>
      </div>
      {/* =================bottom content============ */}
      <div className="bg-primary h-72">
        <div className="icon-bg mt-4 opacity-20 h-24  w-24 "></div>
        <h1 className="text-center text-white text-3xl lg:text-5xl italic lg:p-6 pb-4 px-2 ">
          A big part of financial freedom is having your heart and mind free
          from worry about the what-ifs of life.
        </h1>
      </div>
    </div>
  );
};

export default ExtraInfo;

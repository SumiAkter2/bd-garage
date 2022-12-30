import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./Extrainfo.css";
const ExtraInfo = () => {
  return (
    <div>
      <div className="lg:flex justify-center items-item my-12">
        <div className=" info-container  text-white flex mx-6">
          <div className="w-1/2 bg-black opacity-70 p-12 ">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis aut sit veniam ducimus nesciunt, velit similique porro
              facilis cumque obcaecati saepe libero modi consequatur laboriosam
              officia.
            </h1>
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
        <h1 className="text-center text-white text-3xl lg:text-5xl italic p-6">
          A big part of financial freedom is having your heart and mind free
          from worry about the what-ifs of life.
        </h1>
      </div>
    </div>
  );
};

export default ExtraInfo;

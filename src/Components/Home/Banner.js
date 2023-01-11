import React from "react";
import "./Banner.css";
import banner2 from "../../img/bg.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BannerInfo from "./BannerInfo";

const Banner = () => {
  return (
    <div>
      <div className=" z-2 Banner-container">
        <div
          className=" text-primary text-center slider "
          style={{
            backgroundImage: `url(${banner2})`,
          }}
        >
          <div className="slider-text slider  text-primary font-serif">
            <div>
              <h1 className="lg:text-5xl text-3xl py-5 ">
                More Financial Solution
              </h1>
              <div className=" border-b-4 border-primary w-56 my-6 mx-auto"></div>
              <p className="lg:text-3xl text-xl">
                Corporate and professional business solution
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =================information part=================== */}

      <div
        className="grid grid-cols-1 lg:grid-cols-3 lg:mx-24 mx-12 
     banner-info"
      >
        <BannerInfo
          cardTitle="FINANCIAL AUDIT"
          bgClass="bg-primary opacity-90 hover:opacity-100"
        ></BannerInfo>
        <BannerInfo
          cardTitle="BUSINESS VALUATION"
          bgClass="bg-accent opacity-90 hover:opacity-100"
        ></BannerInfo>
        <BannerInfo
          cardTitle="TAX ADVISORY"
          bgClass="bg-primary opacity-90 hover:opacity-100"
        ></BannerInfo>
      </div>
      {/* ============== who we are page================= */}
      <div className="we-are-content">
        <div className="lg:flex justify-center items-center lg:mx-24 my-6 ">
          <div className="flex-3 px-4">
            <h1 className="text-secondary lg:text-4xl text-2xl font-bold uppercase w-72">
              Who we are
            </h1>
            <br />
            <h1 className="border-b-2 border-primary lg:w-32 "></h1>
            <p className="text-success font-bold  mt-4 ">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate blanditiis laboriosam itaque nobis assumenda? Ipsa pariatur labore numquam impedit? 
            </p>
            <button className="btn btn-primary btn-outline rounded-none my-4 lg:block hidden">
              Learn More
            </button>
          </div>
          <div className="flex-3 text-secondary px-4 text-xl">
            <p className="mt-4">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, vitae excepturi eaque at nam quaerat, doloribus qui minus, cum pariatur eligendi in adipisci. Corrupti laboriosam quaerat asperiores voluptas impedit molestias veniam aperiam facilis debitis assumenda ipsum totam a quasi numquam, reiciendis laudantium culpa eveniet aut ipsa commodi dicta. Molestiae quod voluptatum ipsa earum omnis illo modi dicta explicabo perspiciatis voluptas, veniam iure amet provident aliquid atque voluptatem obcaecati debitis eveniet ipsam delectus vel ducimus cupiditate reprehenderit. Tenetur 
            </p>
            <button className="btn btn-primary btn-outline rounded-none my-4 lg:hidden block">
              Learn more
            </button>
          </div>
        </div>
        <div className="border-b-2 border-secondary  my-4 lg:mx-24"></div>
      </div>
    </div>
  );
};

export default Banner;

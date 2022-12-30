import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../../img/architecture-1867772_1920.jpg";
import banner2 from "../../img/beard-2326422_1920.jpg";
import { Navigation, Pagination } from "swiper";
import { BsLink } from "react-icons/bs";
import BannerInfo from "./BannerInfo";

const Banner = () => {
  return (
    <div>
      <div className="mt-6 z-2 Banner-container">
        <Swiper
          autoplay={{
            // delay: 5000,
            disableOnInteraction: true,
          }}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          modules={[Pagination, Navigation]}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log("swiper")}
          className="mySwiper"
        >
          <div className="">
            <SwiperSlide className="slider  text-white text-start zoom-in img-change">
              <div className="slider-text  text-white font-serif text-center">
                <div>
                  <h1 className="lg:text-5xl text-3xl py-5">
                    Make Your Business Online
                  </h1>
                  <div className=" border-b-4 border-primary lg:w-56 my-6 mx-auto "></div>
                  <p className="lg:text-3xl text-xl">
                    Corporate and professional business solution
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>
          {/* <SwiperSlide
            className=" text-white text-center zoom-out slider"
            style={{
              backgroundImage: `url(${banner2})`,
            }}
          >
            <div className="slider-text slider  text-white font-serif">
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
          </SwiperSlide> */}
        </Swiper>
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
    </div>
  );
};

export default Banner;

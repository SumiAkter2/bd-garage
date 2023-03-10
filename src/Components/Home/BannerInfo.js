import React from "react";

const BannerInfo = ({ cardTitle, bgClass }) => {
  return (
    <div>
      <div className={`  ${bgClass} banner-content `}>
        <figure className="pl-5 pt-5">
          {/* <img src={img} alt="Album" /> */}
        </figure>
        <div className="card-body text-white ">
          <h2 className=" text-center font-bold mb-4">{cardTitle}</h2>
          <div className="border-b-2 border-white lg:w-20 mx-auto"></div>
          <p className="lg:px-6 text-sm mt-2 ">
            Aenean vel dui eu elit vestibulum consequat. maximus quam, vitae
            auctor mi est et libero. Sed placerat accumsan diam sed
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerInfo;

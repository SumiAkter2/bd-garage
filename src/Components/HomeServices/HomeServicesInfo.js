import React from "react";

const HomeServicesInfo = ({ cardTitle, bgClass }) => {
  return (
    <div>
      <div className={`  ${bgClass} banner-content border border-success`}>
        <figure className="pl-5 pt-5"></figure>
        <div className="card-body text-white ">
          <h2 className=" text-center font-bold mb-4 text-success">
            {cardTitle}
          </h2>
          <p text-center font-bold  text-success>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores excepturi laudantium incidunt ad quasi molestiae nemo ipsam corrupti vitae quia quod voluptates nobis assumenda, atque quae ex error obcaecati. </p>
          <div className="border-b-2 border-success lg:w-20 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeServicesInfo;

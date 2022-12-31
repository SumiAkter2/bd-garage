import React from "react";
import img from "../../img/quote.png";
const Comment = () => {
  return (
    <div>
      <div className="lg:flex justify-center items-center my-24 h-96">
        <div className="lg:w-1/2 flex h-96 my-12">
          <div className="bg-accent lg:w-1/4"></div>
          <div className="bg-primary lg:w-3/4 text-center p-4">
            <div className="border-2 m-6 p-6">
              <img
                src={img}
                alt="icon"
                className="w-12 h-12 border-2 mt-[-40px] bg-primary "
              />
              <h1 className="lg:text-xl text-sm italic">
                Fusce viverra ullamcorper mauris nec sollicitudin. Fusce
                ultrices auctor ullamcorper. Nullam varius, purus in laoreet
                efficitur, est sapien rutrum mi, ac gravida lectus lectus non
                nibh. Nullam suscipit dolor arcu
              </h1>
              <h2 className="lg:text-xl text-sm font-bold"> Jon Dowson</h2>
              <h1 className="text-5xl font-bold">...</h1>
            </div>
          </div>
        </div>
        <div className="bg-accent h-96 lg:w-1/2 lg:grid grid-cols-2 p-12 my-12 hidden">
          <div className="w-32 h-32 rounded-full border-4 border-primary text-center text-primary font-bold mx-auto ">
            <h1 className="text-center my-auto p-6 font-bold lg:text-4xl">
              2023
            </h1>
            <p className="">CONTRACTS</p>
          </div>
          <div className="w-32 h-32 rounded-full border-4 border-primary text-center text-primary font-bold  mx-auto">
            <h1 className="text-center my-auto p-6 font-bold lg:text-4xl">
              100%
            </h1>
            <p className="">SATISFACTION</p>
          </div>
          <div className="w-32 h-32 rounded-full border-4 border-primary text-center text-primary font-bold  mx-auto">
            <h1 className="text-center my-auto p-6 font-bold lg:text-4xl">
              789
            </h1>
            <p className="">CASES</p>
          </div>
          <div className="w-32 h-32 rounded-full border-4 border-primary text-center text-primary font-bold  mx-auto">
            <h1 className="text-center my-auto p-6 font-bold lg:text-4xl">
              1023
            </h1>
            <p className="">CLIENTS </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

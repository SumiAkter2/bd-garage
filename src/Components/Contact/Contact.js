import React from "react";
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdAccessTimeFilled } from "react-icons/md";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      {/* ====contact banner======= */}
      <div className="contact-container my-5">
        <div className="bg-black opacity-60 h-72"></div>
      </div>

      <div>
        <h1 className="lg:text-5xl text-3xl font-bold text-center pt-12 text-secondary uppercase">
          Contact US
        </h1>
        <div className="border-b-2 border-primary lg:w-32 mx-auto mt-4 w-12"></div>
        <p className="pb-6 text-success font-bold text-xl my-6 p-3 text-center">
          Sed hendrerit, diam et pellentesque aliquam, lectus ipsum maximus
          quam, vitae auctor
        </p>
      </div>
      <div className="lg:flex justify-center items-start m-6 lg:m-12">
        <div className="bg-primary lg:px-24 py-12 h-96  ">
          <p className="flex justify-start items-start mt-12">
            <ImLocation2 size="25px" />
            <span className=" font-bold ml-4 ">
              83/A Park Street Kolkata 700016
            </span>
          </p>
          <p className="flex justify-start items-start my-3">
            <BsFillTelephoneFill size="25px" />
            <span className=" font-bold ml-4">
              Jay +91 9284865249/ Anuj +91 9163883559
            </span>
          </p>

          <p className="flex justify-start items-start my-3">
            <MdAccessTimeFilled size="25px" />
            <span className=" font-bold ml-4"> Monday-Friday 08:00-18:00</span>
          </p>
          <p className="flex justify-start items-start my-3">
            <GrMail size="25px" />
            <span className=" font-bold ml-4 "> contact@dhakru.com</span>
          </p>
        </div>
        <div className="bg-success h-96 ml-2 p-12">
          
          <div className="ml-6">
            <form action="">
              <h1 className="text-2xl font-bold mb-4 text-primary"> Contact us</h1>
              <input
                type="text"
                className="input input-primary"
                placeholder="Text"
              />
              <br />
              <br />
              <input
                type="email"
                className="input input-primary"
                placeholder="Eamil"
              />
              <br />
              <br />
              <input
                type="text"
                className="input input-primary"
                placeholder="comment "
              />
              \
              <br /> <br />
              <button className="btn btn-primary ">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import icon from "../../img/LOGO.png";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-around items-center bg-transparent">
        <div className="flex justify-center items-center">
          <img src={icon} alt="brand-icon" />
          <h1 className="text-3xl font-bold">Dhakru</h1>
        </div>
        <p className="text-neutral">Finance Str.10 New York</p>
        <p className="text-neutral">office@acounting.com</p>
        <p className="text-neutral">Mon-Fri 08:00-18:00</p>
        <div className="flex justify-around items-center text-neutral">
          <ImFacebook className="mr-6" />
          <BsTwitter className="mr-6" />
          <FaLinkedinIn className="mr-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

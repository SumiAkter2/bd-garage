import React from "react";
import "./Navbar.css";
import icon from "../../img/LOGO.png";
import { ImFacebook } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  return (
    <div>
      {/* top nav content */}
      <div className="flex justify-around items-center bg-transparent ">
        <div className="flex justify-center items-center">
          <img src={icon} alt="brand-icon" />
          <h1 className="text-3xl font-bold text-black">Bd Garage</h1>
        </div>
        <p className="text-neutral lg:block hidden">Dhaka, Bangladesh</p>
        <p className="text-neutral lg:block hidden">bdgarage@gmail.com</p>
        <p className="text-neutral lg:block hidden">Mon-Fri 10:00-12:00</p>
        <div className="flex justify-around items-center text-neutral">
          <ImFacebook className="lg:mr-6 mr-2 lg:block hidden" />
          <BsTwitter className="lg:mr-6 mr-2 lg:block hidden" />
          <FaLinkedinIn className="lg:mr-6 mr-2 lg:block hidden" />
          <div className="dropdown dropdown-left">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <AiOutlineMenu size="25px" fill="black" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent opacity-60 rounded-box w-64 "
            >
              <CustomLink
                to="/"
                className="  mb-6 p-4 font-bold btn rounded-full btn-outline w-48 mx-auto"
              >
                HOME
              </CustomLink>

              <CustomLink
                to="/services"
                className=" mb-6 p-4 font-bold btn rounded-full btn-outline w-48 mx-auto"
              >
                SERVICES
              </CustomLink>

              <CustomLink
                to="/contact"
                className=" mb-6 p-4 font-bold btn rounded-full btn-outline w-48 mx-auto"
              >
                CONTACT
              </CustomLink>
              <CustomLink
                to="/eCommerce"
                className="w-48 mx-auto mb-6 p-4 font-bold btn-secondary btn rounded-full btn-outline hover:text-white "
              >
                <blink> BD E-Commerce</blink>
              </CustomLink>
            </ul>
          </div>
        </div>
      </div>
      {/* bottom nav content */}

      <div className="  ">
        <div className="navbar bg-accent text-white">
          <div className="navbar-start px-4">
            <button className="flex-2 btn btn-primary btn-outline bg-accent  rounded-full text-primary lg:hidden block">
              Call us: +880179999677
            </button>

            <ul className="menu menu-horizontal px-4  hidden lg:flex">
              <CustomLink to="/" className="mr-6 ">
                Home
              </CustomLink>

              <CustomLink to="/services" className="mr-6 ">
                Services
              </CustomLink>

              <CustomLink to="/contact" className="mr-6  ">
                Contact
              </CustomLink>
              <CustomLink to="/eCommerce" className="mr-6  ">
                <blink> Indian E-Commerce</blink>
              </CustomLink>
            </ul>
          </div>

          <div className="navbar-end">
            <button className="flex-2 btn btn-primary btn-outline bg-accent  rounded-full text-primary lg:block hidden px-3">
              Call us: +880179999675
            </button>
            <div className="flex lg:hidden justify-around items-center text-neutral px-3">
              <ImFacebook className="lg:mr-6 mr-2" />
              <BsTwitter className="lg:mr-6 mr-2" />
              <FaLinkedinIn className="lg:mr-6 mr-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

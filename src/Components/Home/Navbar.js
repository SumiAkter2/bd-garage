import React from "react";
import "./Navbar.css";
import icon from "../../img/LOGO.png";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import CustomLink from "../CustomLink/CustomLink";
const Navbar = () => {
  return (
    <div>
      {/* top nav content */}
      <div className="flex justify-around items-center bg-transparent py-4">
        <div className="flex justify-center items-center">
          <img src={icon} alt="brand-icon" />
          <h1 className="text-3xl font-bold">Dhakru</h1>
        </div>
        <p className="text-neutral lg:block hidden">Finance Str.10 New York</p>
        <p className="text-neutral lg:block hidden">office@acounting.com</p>
        <p className="text-neutral lg:block hidden">Mon-Fri 08:00-18:00</p>
        <div className="flex justify-around items-center text-neutral">
          <ImFacebook className="lg:mr-6 mr-2" />
          <BsTwitter className="lg:mr-6 mr-2" />
          <FaLinkedinIn className="lg:mr-6 mr-2" />
        </div>
      </div>
      {/* bottom nav content */}
      <div className="navbar bg-accent">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <div className=" navbar text-start hidden lg:flex">
              <ul className="menu menu-horizontal px-4 ">
                <CustomLink to="/" className="mr-6 hover:border-b-2">
                  Home
                </CustomLink>

                <CustomLink to="/services" className="mr-6 hover:border-b-2">
                  Services
                </CustomLink>

                <CustomLink to="/" className="mr-6  hover:border-b-2">
                  Indian E-Commerce
                </CustomLink>
                <CustomLink to="/contact" className="mr-6 hover:border-b-2 ">
                  Contact
                </CustomLink>
              </ul>
            </div>

            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <CustomLink>Home</CustomLink>

              <CustomLink>Services</CustomLink>

              <CustomLink>Indian E-Commerce</CustomLink>
              <CustomLink>Contact</CustomLink>
            </ul>
          </div>
        </div>
        <div className="ml-12">
          <button className="flex-2 btn btn-primary btn-outline bg-accent  rounded-full text-primary">
            Call us: +98786766
          </button>
        </div>
        <div className="flex lg:hidden justify-around items-center text-neutral">
          <ImFacebook className="lg:mr-6 mr-2" />
          <BsTwitter className="lg:mr-6 mr-2" />
          <FaLinkedinIn className="lg:mr-6 mr-2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

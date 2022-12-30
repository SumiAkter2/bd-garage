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
      <div className="flex justify-around items-center bg-transparent py-4">
        <div className="flex justify-center items-center">
          <img src={icon} alt="brand-icon" />
          <h1 className="text-3xl font-bold">Dhakru</h1>
        </div>
        <p className="text-neutral lg:block hidden">Finance Str.10 New York</p>
        <p className="text-neutral lg:block hidden">office@acounting.com</p>
        <p className="text-neutral lg:block hidden">Mon-Fri 08:00-18:00</p>
        <div className="flex justify-around items-center text-neutral">
          <ImFacebook className="lg:mr-6 mr-2 lg:block hidden" />
          <BsTwitter className="lg:mr-6 mr-2 lg:block hidden" />
          <FaLinkedinIn className="lg:mr-6 mr-2 lg:block hidden" />
          <div className="dropdown dropdown-left">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <AiOutlineMenu size="25px"  fill='black'/>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-400 rounded-box w-52"
            >
              <CustomLink to="/" className="mr-6 hover:border-b-2">
                Home
              </CustomLink>

              <CustomLink to="/services" className="mr-6 hover:border-b-2">
                Services
              </CustomLink>

              <CustomLink to="/eCommerce" className="mr-6  hover:border-b-2">
                Indian E-Commerce
              </CustomLink>
              <CustomLink to="/contact" className="mr-6 hover:border-b-2 ">
                Contact
              </CustomLink>
            </ul>
          </div>
        </div>
      </div>
      {/* bottom nav content */}

      <div className="  ">
        <div className="navbar bg-accent text-white">
          <div className="navbar-start">
            <button className="flex-2 btn btn-primary btn-outline bg-accent  rounded-full text-primary lg:hidden block">
              Call us: +98786766
            </button>
            <div className="dropdown">
              <ul
                // tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <CustomLink to="/" className="mr-6 hover:border-b-2">
                  Home
                </CustomLink>

                <CustomLink to="/services" className="mr-6 hover:border-b-2">
                  Services
                </CustomLink>

                <CustomLink to="/eCommerce" className="mr-6  hover:border-b-2">
                  Indian E-Commerce
                </CustomLink>
                <CustomLink to="/contact" className="mr-6 hover:border-b-2 ">
                  Contact
                </CustomLink>
              </ul>
            </div>
            <ul className="menu menu-horizontal px-4  hidden lg:flex">
              <CustomLink to="/" className="mr-6 hover:border-b-2">
                Home
              </CustomLink>

              <CustomLink to="/services" className="mr-6 hover:border-b-2">
                Services
              </CustomLink>

              <CustomLink to="/eCommerce" className="mr-6  hover:border-b-2">
                Indian E-Commerce
              </CustomLink>
              <CustomLink to="/contact" className="mr-6 hover:border-b-2 ">
                Contact
              </CustomLink>
            </ul>
          </div>
          {/* <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a>
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div> */}
          <div className="navbar-end">
            <button className="flex-2 btn btn-primary btn-outline bg-accent  rounded-full text-primary lg:block hidden">
              Call us: +98786766
            </button>
            <div className="flex lg:hidden justify-around items-center text-neutral">
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

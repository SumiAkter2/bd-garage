import React from "react";
import { FaUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FaDatabase } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { MdFindInPage } from "react-icons/md";
import { FaFileImport } from "react-icons/fa";
import "./Services.css";
const Services = () => {
  return (
    <div className="mb-12">
      <div>
        {/* ==========services banner============= */}
        <div className="services-container mb-6 ">
          <div className="bg-black opacity-60 h-72 text-white text-center">
            <h1 className="lg:text-4xl text-2xl py-12 font-bold">
              SERVICE AND PRICING
            </h1>
            <p>
              Ready to take your productivity to the next level? Complete our
              form to access our virtual assistant services.
            </p>
          </div>
        </div>
        {/* ===========services content================== */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 my-12 lg:mx-24 mx-12">
          <div className="card border-2 border-primary  shadow-3xl hover:bg-success">
            <figure className="pt-6">
              <FaUser fill="#FF533D" size="35px" />
            </figure>
            <div className="card-body items-center justify-start text-center ">
              <h2 className="card-title text-primary text-3xl my-3">
                Personal Assistance
              </h2>
              <div>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    {" "}
                    Inbox,calendar management
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Travel bookings and arrangements
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Bookkeeping and financial tasks
                  </span>
                </p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary btn-outline mt-6">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card border-2 border-primary  hover:bg-success shadow-3xl">
            <figure className="pt-6">
              <GoGraph fill="#FF533D" size="35px" />
            </figure>
            <div className="card-body items-center justify-start text-center ">
              <h2 className="card-title text-primary text-3xl my-3">
                Digital Marketing
              </h2>
              <div>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Support Social media scheduling and management
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Email campaign management
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Content creation and community management
                  </span>
                </p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary btn-outline mt-6">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card border-2 border-primary  hover:bg-success shadow-3xl">
            <figure className="pt-6">
              <FaDatabase fill="#FF533D" size="35px" />
            </figure>
            <div className="card-body items-center justify-start text-center ">
              <h2 className="card-title text-primary text-3xl my-3">
                Sales Support
              </h2>
              <div>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Lead generation and cold emailing
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Database input, organization, and updates
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Quotation preparation and invoice processing
                  </span>
                </p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary btn-outline mt-6">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card border-2 border-primary  hover:bg-success shadow-3xl">
            <figure className="pt-6">
              <FaProjectDiagram fill="#FF533D" size="35px" />
            </figure>
            <div className="card-body items-center justify-start text-center ">
              <h2 className="card-title text-primary text-3xl my-3">
                Project Management Support
              </h2>
              <div>
                <p className="text-start text-black flex justify-start items-center">
                  <FaProjectDiagram fill="#FF533D" size="35px" />
                  <span className="text-xl ml-4">
                    Task tracking and progress reporting
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Status updates and quality assurance
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Team coordination and schedule optimization
                  </span>
                </p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary btn-outline mt-6">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card border-2 border-primary  hover:bg-success shadow-3xl">
            <figure className="pt-6">
              <BsGraphUp fill="#FF533D" size="35px" />
            </figure>
            <div className="card-body items-center justify-start text-center ">
              <h2 className="card-title text-primary text-3xl my-3">
                CRM Setup & Management
              </h2>
              <div>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    CRM setup and third party integration
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Customization and user training
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Automation configuration, workflow design, and reporting
                  </span>
                </p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary btn-outline mt-6">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card border-2 border-primary  hover:bg-success shadow-3xl">
            <figure className="pt-6">
              <BsSearch fill="#FF533D" size="35px" />
            </figure>
            <div className="card-body items-center justify-start text-center ">
              <h2 className="card-title text-primary text-3xl my-3">
                Desk/Market Research & Survey
              </h2>
              <div>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Primary and secondary research
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Compiling and analyzing published data and statistics
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Survey design and interviews
                  </span>
                </p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary btn-outline mt-6">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="card border-2 border-primary  hover:bg-success shadow-3xl">
            <figure className="pt-6">
              <BsFillCartFill fill="#FF533D" size="35px" />
            </figure>
            <div className="card-body items-center justify-start text-center ">
              <h2 className="card-title text-primary text-3xl my-3">
                E-Commerce Admin
              </h2>
              <div>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Product listings and inventory management
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus s />
                  <span className="text-xl ml-4">
                    Order fulfillment, payment processing, and charge back
                    monitoring
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Shipping logistics and returns handling
                  </span>
                </p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary btn-outline mt-6">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card border-2 border-primary  hover:bg-success shadow-3xl">
            <figure className="pt-6">
              <BiMessageRounded fill="#FF533D" size="35px" />
            </figure>
            <div className="card-body items-center justify-start text-center ">
              <h2 className="card-title text-primary text-3xl my-3">
                CRM Admin Support
              </h2>
              <div>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Contact management and lead tracking
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Deal and pipeline management
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Customer service, ticket management, and chat management
                  </span>
                </p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary btn-outline mt-6">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="card border-2 border-primary  hover:bg-success shadow-3xl">
            <figure className="pt-6">
              <FaHeadset fill="#FF533D" size="35px" />
            </figure>
            <div className="card-body items-center justify-start text-center ">
              <h2 className="card-title text-primary text-3xl my-3">
                Customer Support
              </h2>
              <div>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Email and live chat support
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Complaint handling and resolution
                  </span>
                </p>
                <p className="text-black text-start flex justify-start items-start">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Order, return, and exchange coordination and management
                  </span>
                </p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary btn-outline mt-6">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="card border-2 border-primary  hover:bg-success shadow-3xl">
            <figure className="pt-6">
              <FaFileImport fill="#FF533D" size="35px" />
            </figure>
            <div className="card-body items-center justify-start text-center ">
              <h2 className="card-title text-primary text-3xl my-3">
                Data Entry
              </h2>
              <div>
                <p className="text-start text-black flex justify-start items-center ">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Reviewing all data to ensure accuracy
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center ">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Entering information into databases
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center text-start">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Resolving discrepancies & updating as necessary
                  </span>
                </p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary btn-outline mt-6">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card border-2 border-primary  hover:bg-success shadow-3xl">
            <figure className="pt-6">
              <FaFileExport fill="#FF533D" size="35px" />
            </figure>
            <div className="card-body items-center justify-start text-center ">
              <h2 className="card-title text-primary text-3xl my-3">
                Data Scraping
              </h2>
              <div>
                <p className="text-black flex justify-start text-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Extracting and ingesting data from databases
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4"> Reviewing output</span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Data cleanup and formatting
                  </span>
                </p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary btn-outline mt-6">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="card border-2 border-primary  hover:bg-success shadow-3xl">
            <figure className="pt-6">
              <MdFindInPage fill="#FF533D" size="35px" />
            </figure>
            <div className="card-body  justify-start items-center  ">
              <h2 className="card-title text-primary text-3xl ">
                Due Diligence
              </h2>
              <div>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Conducting background checks, preparing reports
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4">
                    Identifying and assessing potential risks
                  </span>
                </p>
                <p className="text-start text-black flex justify-start items-center">
                  <AiOutlinePlus />
                  <span className="text-xl ml-4"> Performing site visits</span>
                </p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary btn-outline mt-6">
                  Try Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==============bottom ================== */}
      <div>
        <div className="bg-primary h-96 mx-12 lg:mx-24 my-12">
          <div className="icon-bg  opacity-20 h-24  w-24 "></div>
          <h1 className="text-center text-white text-2xl lg:text-3xl italic lg:p-6 pb-4 px-2 font-bold bg-orange-300">
            WHY YOU NEED TO HIRE VIRTARY'S VIRTUAL ASSISTANTS?
          </h1>
          <h1 className="text-center text-white text-xl lg:text-2xl italic lg:p-6 pb-4 px-2 ">
            A big part of financial freedom is having your heart and mind free
            from worry about the what-ifs of life.
          </h1>
        </div>
        <div className="services-content my-5">
          <div className="bg-black opacity-80 lg:h-96 text-white text-center mt-12">
            <h1 className="lg:text-4xl text-2xl py-12 font-bold px-6 mt-6">
              "HIRING A VIRTUAL ASSISTANT AS A REMOTE STAFF DEFINITELY
              ACCELERATES YOUR BUSINESS AND YOUR COMPANY FROM 0 TO 740
              HORSEPOWER.
              <br />
              <br />A VIRTUAL ASSISTANT MAKES YOU RUN FASTER, FLY HIGHER!"
            </h1>
            <button className=" btn btn-primary btn-outline lg:w-56 my-6">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

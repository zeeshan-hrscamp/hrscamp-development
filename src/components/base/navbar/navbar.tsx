import React, { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faUsers,faInfoCircle, faTools, faBlog, faCogs,faUserTie, faHandshake, faQuestionCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";


// import { CgMenuGridO } from "react-icons/cg";
// import { FcAbout } from "react-icons/fc";
// import { GiTeamIdea } from "react-icons/gi";
// import { RiTeamFill } from "react-icons/ri";
// import { FaPerson } from "react-icons/fa6";
// import { GrServices } from "react-icons/gr";
// import { MdModelTraining } from "react-icons/md";
// import { FaBlog } from "react-icons/fa";
// import { FcFaq } from "react-icons/fc";
// import { MdContacts } from "react-icons/md";
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative ">
      <button
        onClick={toggleDropdown}
        className="p-1 border border-grey rounded-md bg-slate-200 hover:bg-slate-300 hover:opacity-70 transition-all duration-300"
      >
        <FontAwesomeIcon icon={faBars} className="w-7 h-5" />
       
        {/* <CgMenuGridO className="w-7 h-5" /> */}
      </button>

      {isDropdownOpen && (
        <div
          // id="navbar-dropdown"
          // className={`absolute top-6 left-1/2 mt-2 bg-slate-900 opacity-80 shadow-md rounded-md overflow-hidden mr-4 opacity-0 transition-opacity duration-500 ease-out ${isDropdownOpen ? 'opacity-100' : ''}`}
          // style={{ transform: 'translateX(-50%)' }}
          id="navbar-dropdown"
          className={`absolute top-6 right-full mt-2 bg-slate-900 opacity-80 shadow-md rounded-md overflow-hidden ml-4 opacity-0 transition-opacity duration-500 ease-out ${
            isDropdownOpen ? "opacity-100" : ""
          }`}
          style={{ width: "300px" }}
        >
          <div className="ml-2 mr-2 mt-3">
            <Link
              to="/about"
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            >
              <span className="flex">
                {/* <FcAbout className="mt-1 mr-2 mb-1" /> */}
                <FontAwesomeIcon icon={faInfoCircle} className="mt-1 mr-2 mb-1" />
                About
              </span>
            </Link>
            <hr className="bg-slate-500" />
          </div>
          <div className="ml-2 mr-2 mt-3">
            <Link
              to="/team"
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            >
              <span className="flex">
                {/* <GiTeamIdea className="mt-1 mr-2 mb-1" /> */}
                <FontAwesomeIcon icon={faUsers} className="mt-1 mr-2 mb-1" />
                Team
              </span>
            </Link>
            <hr className="bg-slate-500" />
          </div>
          <div className="ml-2 mr-2 mt-3">
            <Link
              to="/client"
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
            >
              <span className="flex">
              <FontAwesomeIcon icon={faUserTie} className="mt-1 mr-2 mb-1" />
                {/* <RiTeamFill className="mt-1 mr-2 mb-1" /> */}
                Client
              </span>
            </Link>

            <hr className="bg-slate-500" />
          </div>
          <div className="ml-2 mr-2 mt-3">
            <Link
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              to="/candidate"
            >
              <span className="flex">
                {/* <FaPerson className="mt-1 mr-2 mb-1" /> */}
                <FontAwesomeIcon icon={faUser} className="mt-1 mr-2 mb-1" />
                Candidate
              </span>
            </Link>
            <hr className="bg-slate-500" />
          </div>
          <div className="ml-2 mr-2 mt-3">
            <Link
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              to="/services"
            >
              <span className="flex">
              <FontAwesomeIcon icon={faTools} className="mt-1 mr-2 mb-1" />
                
                {/* <GrServices className="mt-1 mr-2 mb-1" /> */}
                Services
              </span>
            </Link>
            <hr className="bg-slate-500" />
          </div>
          <div className="ml-2 mr-2 mt-3">
            <Link
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              to="/model"
            >
              <span className="flex">  
              <FontAwesomeIcon icon={faCogs} className="mt-1 mr-2 mb-1" />

                {/* <MdModelTraining className="mt-1 mr-2 mb-1" /> */}
                Model
              </span>
            </Link>
            <hr className="bg-slate-500" />
          </div>
          <div className="ml-2 mr-2 mt-3">
            <Link
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              to="/blog"
            >
              <span className="flex">
              <FontAwesomeIcon icon={faBlog} className="mt-1 mr-2 mb-1" />
                {/* <FaBlog className="mt-1 mr-2 mb-1" /> */}
                Blog
              </span>
            </Link>
            <hr className="bg-slate-500" />
          </div>
          <div className="ml-2 mr-2 mt-3">
            <Link
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              to="/faqs"
            >
              <span className="flex">
              <FontAwesomeIcon icon={faQuestionCircle} className="mt-1 mr-2 mb-1" />
                {/* <FcFaq className="mt-1 mr-2 mb-1" /> */}
                FAQs
              </span>
            </Link>
            <hr className="bg-slate-500" />
          </div>
          <div className="ml-2 mr-2 mt-3">
            <Link
              className="font-medium text-white hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              to="/contact"
            >
              <span className="flex">
              <FontAwesomeIcon icon={faEnvelope} className="mt-1 mr-2 mb-1" />
                {/* <MdContacts className="mt-1 mr-2 mb-1" /> */}
                Contact
              </span>
            </Link>
            <hr className="bg-slate-500" />
          </div>
          {/* Add other links as needed */}
        </div>
      )}
    </div>
  );
};

export default Navbar;

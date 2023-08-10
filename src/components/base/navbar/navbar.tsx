import React, { useState } from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <div
      id="navbar-collapse-with-animation"
      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
    >
      <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
        <Link
          className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
          to="/about"
        >
          About
        </Link>
        <Link
          className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
          to="/team"
        >
          Team
        </Link>
        <Link
          className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
          to="/client"
        >
          Client
        </Link>
        <Link
          className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
          to="/candidate"
        >
          Candidate
        </Link>
        <Link
          className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
          to="/services"
        >
          Services
        </Link>
        <Link
          className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
          to="/process"
        >
          Process
        </Link>
        <Link
          className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
          to="/model"
        >
          Model
        </Link>        
        <Link
          className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
          to="/faqs"
        >
          FAQs
        </Link>
        <Link
          className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "gatsby";
import Navbar from "../navbar/navbar";
import Logo from "../../../images/logo.png";

// import { wrapper } from "./header.module.css";

const Header = () => (
  // <div className={wrapper}>
  //  <Navbar />
  // </div>
  // -------------------
  <>
    <header className="rounded-2xl fixed flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 bg-slate-700 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={Logo} alt="HRSCamp" className="h-12 my-2 " />
          </Link>
        </div>
        <Navbar />
      </nav>
    </header>
    s{" "}
  </>
);

export default Header;

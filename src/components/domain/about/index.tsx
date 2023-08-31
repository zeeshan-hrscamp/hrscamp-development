import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import CompanyProfile from "./company-profile";
import CeoMessage from "./ceo-message";
import Statement from "./statement";

const About = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="rounded-lg border-2 border-indigo-600 bg-indigo-400 pr-20 pl-20 mr-20 ml-20 mt-1 mb-1">
          <CompanyProfile />
        </div>
        <div className="rounded-lg border-2 border-sky-600 bg-sky-400 pr-20 pl-20 mr-20 ml-20 mt-1 mb-1">
          <CeoMessage />
        </div>
        <div className="rounded-lg border-2 border-green-600 bg-green-400 pr-20 pl-20 mr-20 ml-20 mt-1 mb-1">
          <Statement />
        </div>
      </div>
    </>
  );
};

export default About;

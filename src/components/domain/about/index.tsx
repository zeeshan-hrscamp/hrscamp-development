import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import CompanyProfile from "./company-profile";
import CeoMessage from "./ceo-message";
import Statement from "./statement";

const About = () => {
  return (
    <>
      <CompanyProfile />
      <CeoMessage />
      <Statement />
    </>
  );
};

export default About;

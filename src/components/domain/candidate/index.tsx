import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import CandidateBenefits from "./benefits";
import CandidateFaqs from "./faqs";
import CandidateTestimonials from "./testimonials";

const Candidate = () => {
  return (
    <>
      <CandidateBenefits />
      <CandidateFaqs />
      <CandidateTestimonials />
    </>
  );
};

export default Candidate;

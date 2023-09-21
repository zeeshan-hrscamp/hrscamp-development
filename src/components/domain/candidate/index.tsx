import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import CandidateBenefits from "./benefits";
import CandidateFaqs from "./faqs";
import CandidateTestimonials from "./testimonials";
import CandidateProfile from "./candidate-profile/candidate-profile";

const Candidate = () => {
  return (
    <>
      <CandidateProfile />
      <CandidateBenefits />
      <CandidateTestimonials />
      <CandidateFaqs />
    </>
  );
};

export default Candidate;

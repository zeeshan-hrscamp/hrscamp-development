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
      <hr />
      <CandidateBenefits />
      <hr />
      <CandidateTestimonials />
      <hr />
      <CandidateFaqs />
    </>
  );
};

export default Candidate;

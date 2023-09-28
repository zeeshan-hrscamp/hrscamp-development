import * as React from "react";
import CandidateTestimonialCard from "./candidate-testimonial-card";

const CandidateTestimonials = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 grid content-center">
          <h2 className="text-5xl text-green-600 ">Candidate Testimonials</h2>
        </div>
        <div className="flex flex-col basis-1/2">
          <CandidateTestimonialCard />
        </div>
      </div>
    </>
  );
};

export default CandidateTestimonials;

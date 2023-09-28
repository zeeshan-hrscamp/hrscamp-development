import * as React from "react";
import CandidateFaqCard from "./candidate-faq-card";

const CandidateFaqs = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 grid content-center">
          <h2 className="text-5xl text-green-600 ">Candidate FAQs</h2>
        </div>
        <div className="flex flex-col basis-1/2">
          <CandidateFaqCard />
        </div>
      </div>
    </>
  );
};

export default CandidateFaqs;

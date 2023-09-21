import * as React from "react";
import RecruiterOutsourcingModelCard from "./recruiter-outsourcing/recruiter-outsourcing-model-card";
import RPOModelCard from "./recruitment-process-outsourcing/rpo-model-card";
import ModelProfile from "./model-profile/model-profile";

const Models = () => {
  return (
    <>
      <ModelProfile />
      <RPOModelCard />
      <RecruiterOutsourcingModelCard />
    </>
  );
};

export default Models;

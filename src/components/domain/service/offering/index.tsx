import * as React from "react";
import RecruitmentServiceCard from "./recruitment/recruitment-service-card";
import AugmentedSourcingServiceCard from "./augmented-sourcing/augmented-sourcing-service-card";

const Offerings = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="rounded-lg border-2 border-indigo-600 pr-20 pl-20 mr-20 ml-20 mt-1 mb-1">
          <RecruitmentServiceCard />
        </div>
        <div className="rounded-lg border-2 border-green-600 pr-20 pl-20 mr-20 ml-20 mt-1 mb-1">
          <AugmentedSourcingServiceCard />
        </div>
      </div>
    </>
  );
};

export default Offerings;

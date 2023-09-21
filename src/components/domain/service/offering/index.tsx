import * as React from "react";
import RecruitmentServiceCard from "./recruitment/recruitment-service-card";
import AugmentedSourcingServiceCard from "./augmented-sourcing/augmented-sourcing-service-card";
import TrainingServiceCard from "./training/training-service-card";
import AttestationServiceCard from "./attestation/attestation-service-card";
import InterviewPreparationServiceCard from "./interview-preparation/interview-preparation-service-card";
import JobPlacementServiceCard from "./job-placement/job-placement-service-card";
import ResumeWritingServiceCard from "./resume-writing/resume-writing-service-card";
import VisaProcessingServiceCard from "./visa-processing-client/visa-processing-service-card";
import VisaProcessingClientServiceCard from "./visa-processing-client/visa-processing-service-card";
import VisaProcessingCandidateServiceCard from "./visa-processing-candidate/visa-processing-service-card";
import SpaceSharingServiceCard from "./space-sharing/space-sharing-service-card";

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
        <div className="rounded-lg border-2 border-green-600 pr-20 pl-20 mr-20 ml-20 mt-1 mb-1">
          <TrainingServiceCard />
        </div>
        <div className="rounded-lg border-2 border-green-600 pr-20 pl-20 mr-20 ml-20 mt-1 mb-1">
          <AttestationServiceCard />
        </div>
        <div className="rounded-lg border-2 border-green-600 pr-20 pl-20 mr-20 ml-20 mt-1 mb-1">
          <SpaceSharingServiceCard />
        </div>
        <div className="rounded-lg border-2 border-green-600 pr-20 pl-20 mr-20 ml-20 mt-1 mb-1">
          <VisaProcessingClientServiceCard />
        </div>
        <div className="rounded-lg border-2 border-green-600 pr-20 pl-20 mr-20 ml-20 mt-1 mb-1">
          <JobPlacementServiceCard />
        </div>
        <div className="rounded-lg border-2 border-green-600 pr-20 pl-20 mr-20 ml-20 mt-1 mb-1">
          <InterviewPreparationServiceCard />
        </div>
        <div className="rounded-lg border-2 border-green-600 pr-20 pl-20 mr-20 ml-20 mt-1 mb-1">
          <ResumeWritingServiceCard />
        </div>
        <div className="rounded-lg border-2 border-green-600 pr-20 pl-20 mr-20 ml-20 mt-1 mb-1">
          <VisaProcessingCandidateServiceCard />
        </div>
      </div>
    </>
  );
};

export default Offerings;

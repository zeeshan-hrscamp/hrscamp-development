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
        <RecruitmentServiceCard />
        <hr />
        <AugmentedSourcingServiceCard />
        <hr />
        <TrainingServiceCard />
        <hr />
        <AttestationServiceCard />
        <hr />
        <SpaceSharingServiceCard />
        <hr />
        <VisaProcessingClientServiceCard />
        <hr />
        <JobPlacementServiceCard />
        <hr />
        <InterviewPreparationServiceCard />
        <hr />
        <ResumeWritingServiceCard />
        <hr />
        <VisaProcessingCandidateServiceCard />
      </div>
    </>
  );
};

export default Offerings;

import * as React from "react";
import Offerings from "./offering";
import TechnologyStack from "./technology-stack";
import ServiceProfile from "./service-profile/service-profile";

const Services = () => {
  return (
    <>
      <div>
        <ServiceProfile />
        <hr />
        <Offerings />
        <hr />
        <TechnologyStack />
      </div>
    </>
  );
};

export default Services;

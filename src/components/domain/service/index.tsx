import * as React from "react";
import Offerings from "./offering";
import TechnologyStack from "./technology-stack";
import ServiceProfile from "./service-profile/service-profile";

const Services = () => {
  return (
    <>
      <div style={{ background: "#292536" }}>
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

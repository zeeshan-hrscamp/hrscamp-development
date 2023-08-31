import * as React from "react";
import Offerings from "./offering";
import TechnologyStack from "./technology-stack";

const Services = () => {
  const pageContainer = `
      flex
      flex-col
    `;

  return (
    <>
      <div className={pageContainer}>
        <Offerings />
        <TechnologyStack />
      </div>
    </>
  );
};

export default Services;

import * as React from "react";
import TechnologyStackCard from "./technology-stack-card";

const TechnologyStack = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 grid content-center">
          <h2 className="text-5xl text-green-600 ">Technology Stack</h2>
        </div>
        <div className="flex flex-col basis-1/2">
          <TechnologyStackCard />
        </div>
      </div>
    </>
  );
};

export default TechnologyStack;

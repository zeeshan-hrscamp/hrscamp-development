import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StatementCard from "./statement-card";

const Statement = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 grid content-center">
          <h2 className="text-5xl text-green-600 ">Statements</h2>
        </div>
        <div className="flex flex-col basis-1/2">
          <StatementCard />
        </div>
      </div>
    </>
  );
};

export default Statement;

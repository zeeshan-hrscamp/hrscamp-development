import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StatementCard from "./statement-card";

const Statement = () => {
  return (
    <>
      <h2>Statements</h2>
      <StatementCard />
    </>
  );
};

export default Statement;

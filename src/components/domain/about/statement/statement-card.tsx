import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatementCard = () => {
  const data = useStaticQuery(graphql`
    query StatementCardQuery {
      allMdx(filter: { frontmatter: { category: { eq: "statement" } } }) {
        nodes {
          excerpt
          frontmatter {
            title
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allMdx.nodes.map((node) => (
        <div>
            <h4>{node.frontmatter.title}</h4>
          <div>
            <p>{node.excerpt}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default StatementCard;

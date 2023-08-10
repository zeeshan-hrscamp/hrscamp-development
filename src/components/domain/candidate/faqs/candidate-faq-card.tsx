import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CandidateFaqCard = () => {
  const data = useStaticQuery(graphql`
    query CandidateFaqCardQuery {
      allMdx(
        filter: {
          frontmatter: { domain: { eq: "candidate" }, sub_domain: { eq: "faq" } }
        }
      ) {
        nodes {
          frontmatter {
            question
            answer
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allMdx.nodes.map((node) => (
        <div>
          <p>
            <b>{node.frontmatter.question}</b>
          </p>
          <p>{node.frontmatter.answer}</p>
        </div>
      ))}
    </>
  );
};

export default CandidateFaqCard;

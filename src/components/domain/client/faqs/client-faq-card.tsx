import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClientFaqCard = () => {
  const data = useStaticQuery(graphql`
    query ClientFaqCardQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "faq" }
            domain_section: { eq: "client" }
          }
        }
        sort: { frontmatter: { no: ASC } }
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
      {data.allMarkdownRemark.nodes.map((node) => (
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

export default ClientFaqCard;

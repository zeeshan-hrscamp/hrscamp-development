import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import FaqProfile from "./faq-profile/faq-profile";

const Faqs = () => {
  const data = useStaticQuery(graphql`
    query FaqsQuery {
      allMarkdownRemark(
        filter: { frontmatter: { domain: { eq: "faq" } } }
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
      <FaqProfile />
      <hr />
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

export default Faqs;

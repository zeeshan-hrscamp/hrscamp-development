import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

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
      <h2>Frequently Asked Questions</h2>
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

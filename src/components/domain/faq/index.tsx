import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const Faqs = () => {
  const data = useStaticQuery(graphql`
    query FaqsQuery {
      allMdx(filter: { frontmatter: { domain: { eq: "faq" } } }) {
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

export default Faqs;

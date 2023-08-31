import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const StatementCard = () => {
  const data = useStaticQuery(graphql`
    query StatementsQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "about" }
            domain_section: { eq: "statement" }
          }
        }
        sort: { frontmatter: { no: ASC } }
      ) {
        nodes {
          html
          frontmatter {
            section_title
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allMarkdownRemark.nodes.map((statement) => (
        <div>
          <h1>{statement.frontmatter.section_title}</h1>
          <div dangerouslySetInnerHTML={{ __html: statement.html }} />
        </div>
      ))}
    </>
  );
};

export default StatementCard;

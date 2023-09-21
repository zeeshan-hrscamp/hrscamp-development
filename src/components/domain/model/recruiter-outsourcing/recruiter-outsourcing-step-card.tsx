import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecruiterOutsourcingStepCard = () => {
  const data = useStaticQuery(graphql`
    query RecruiterOutsourcingStepCardQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "process" }
            domain_section: { eq: "step" }
            process_title: { eq: "Recruiter Outsourcing" }
          }
        }
        sort: { frontmatter: { step_no: ASC } }
      ) {
        nodes {
          html
          frontmatter {
            step_name
            step_no
            step_image {
              childImageSharp {
                gatsbyImageData(quality: 90, width: 90, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allMarkdownRemark.nodes.map((node) => (
        <div>
          <GatsbyImage
            image={getImage(node.frontmatter.step_image)}
            alt={node.frontmatter.step_name}
          />
          <h4>{node.frontmatter.step_name}</h4>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))}
    </>
  );
};

export default RecruiterOutsourcingStepCard;

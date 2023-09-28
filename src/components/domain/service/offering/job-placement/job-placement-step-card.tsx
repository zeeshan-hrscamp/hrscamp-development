import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JobPlacementStepCard = () => {
  const data = useStaticQuery(graphql`
    query JobPlacementStepCardQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "process" }
            domain_section: { eq: "step" }
            process_title: { eq: "Job Placement" }
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
        <div className="flex flex-row">
          <div className="flex flex-col grid content-center basis-1/4">
            <GatsbyImage
              image={getImage(node.frontmatter.step_image)}
              alt={node.frontmatter.step_name}
            />
            <div className="flex justify-center">
              <h4>{node.frontmatter.step_name}</h4>
            </div>
          </div>
          <div className="grid content-center basis-3/4">
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        </div>
      ))}
    </>
  );
};

export default JobPlacementStepCard;

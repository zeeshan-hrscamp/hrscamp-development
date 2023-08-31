import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AugmentedSourcingStepCard = () => {
  const data = useStaticQuery(graphql`
    query AugmentedSourcingStepCardQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "process" }
            domain_section: { eq: "step" }
            process_title: { eq: "Augmented Sourcing" }
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
                gatsbyImageData(quality: 30, width: 30, layout: CONSTRAINED)
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
          <h3>Step#: {node.frontmatter.step_no} {node.frontmatter.step_name}</h3>
          <GatsbyImage
            image={getImage(node.frontmatter.step_image)}
            alt={node.frontmatter.step_name}
          />
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))}
    </>
  );
};

export default AugmentedSourcingStepCard;

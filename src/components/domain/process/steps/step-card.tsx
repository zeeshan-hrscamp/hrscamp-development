import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StepCard = () => {
  const data = useStaticQuery(graphql`
    query StepCardQuery {
      allMdx(
        filter: {
          frontmatter: {
            domain: { eq: "process" }
            sub_domain: { eq: "step" }
          }
        }
      ) {
        nodes {
          excerpt
          frontmatter {
            step_name
            image {
              childImageSharp {
                gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {/* <h3>Client Benefit Card</h3> */}
      {data.allMdx.nodes.map((node) => (
        <div>
          <h3>{node.frontmatter.step_name}</h3>
          <GatsbyImage
            image={getImage(node.frontmatter.image)}
            alt={node.frontmatter.step_name}
          />
          <div>
            <p>{node.excerpt}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default StepCard;

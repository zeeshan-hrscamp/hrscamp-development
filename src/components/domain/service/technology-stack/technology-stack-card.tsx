import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TechnologyStackCard = () => {
  const data = useStaticQuery(graphql`
    query TechnologyStackCardQuery {
      allMdx(
        filter: {
          frontmatter: {
            domain: { eq: "service" }
            sub_domain: { eq: "technology_stack" }
          }
        }
      ) {
        nodes {
          frontmatter {
            operation
            technology
            technology_image {
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
      {data.allMdx.nodes.map((node) => (
        <div>
          <GatsbyImage
            image={getImage(node.frontmatter.technology_image)}
            alt={node.frontmatter.technology}
          />
          <h3>{node.frontmatter.technology}</h3>
        </div>
      ))}
    </>
  );
};

export default TechnologyStackCard;

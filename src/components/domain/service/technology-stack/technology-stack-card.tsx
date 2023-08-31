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
          excerpt
          frontmatter {
            operation
            technology
            technology_image {
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
      {data.allMdx.nodes.map((node) => (
        <div>
          <h3>{node.frontmatter.technology}</h3>
          <GatsbyImage
            image={getImage(node.frontmatter.technology_image)}
            alt={node.frontmatter.technology}
          />
          <div>
            <p>{node.excerpt}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TechnologyStackCard;

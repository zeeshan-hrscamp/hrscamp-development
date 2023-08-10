import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OfferingCard = () => {
  const data = useStaticQuery(graphql`
    query OfferingCardQuery {
      allMdx(
        filter: {
          frontmatter: {
            domain: { eq: "service" }
            sub_domain: { eq: "offering" }
          }
        }
      ) {
        nodes {
          excerpt
          frontmatter {
            title
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
      {data.allMdx.nodes.map((node) => (
        <div>
          <h3>{node.frontmatter.title}</h3>
          <GatsbyImage
            image={getImage(node.frontmatter.image)}
            alt={node.frontmatter.title}
          />
          <div>
            <p>{node.excerpt}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default OfferingCard;

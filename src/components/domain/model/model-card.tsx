import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModelCard = () => {
  const data = useStaticQuery(graphql`
    query ModelCardQuery {
      allMdx(
        filter: {
          frontmatter: {
            domain: { eq: "model" }
            sub_domain: { eq: "model" }
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

export default ModelCard;

import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const CeoMessage = () => {
  const data = useStaticQuery(graphql`
    query CeoMessageQuery {
      allMdx(
        filter: {
          frontmatter: {
            category: { eq: "ceo-message" }
            page: { eq: "about" }
          }
        }
      ) {
        nodes {
          excerpt
          frontmatter {
            name
            role
            title
            lindedin_address
            email
            image {
              childImageSharp {
                gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
                # gatsbyImageData
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
          <h2>{node.frontmatter.title}</h2>
          <h3>{node.frontmatter.name}</h3>
          <h4>{node.frontmatter.role}</h4>
          <GatsbyImage
            image={getImage(node.frontmatter.image)}
            alt={node.frontmatter.name}
          />
          <div>
            {node.frontmatter.lindedin_address.length > 0 && (
              <a href={node.frontmatter.lindedin_address}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            )}
          </div>
          <div>
            {node.frontmatter.lindedin_address.length > 0 && (
              <a href={`mailto:${node.frontmatter.email}`}>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            )}
          </div>
          <div>
            <p>{node.excerpt}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CeoMessage;

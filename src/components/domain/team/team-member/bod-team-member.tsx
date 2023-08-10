import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const BODTeamMember = () => {
  const data = useStaticQuery(graphql`
    query BODTeamMemberQuery {
      allMdx(
        filter: {
          frontmatter: { category: { eq: "team" }, team_type: { eq: "bod" } }
        }
      ) {
        nodes {
          frontmatter {
            team_type
            name
            role
            lindedin_address
            email
            image {
              childImageSharp {
                gatsbyImageData(quality: 90, width: 200, layout: CONSTRAINED)
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return (
    <>
      <h2>Board of Directors</h2>
      {data.allMdx.nodes.map((node) => (
        <div>
          <h3>{node.frontmatter.name}</h3>
          <div>
            <p>{node.frontmatter.role}</p>
          </div>
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

export default BODTeamMember;

import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClientBenefitCard = () => {
  const data = useStaticQuery(graphql`
    query ClientBenefitCardQuery {
      allMdx(
        filter: {
          frontmatter: {
            domain: { eq: "client" }
            sub_domain: { eq: "benefit" }
          }
        }
      ) {
        nodes {
          excerpt
          frontmatter {
            title
            icon_title
            icon {
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
          <h3>{node.frontmatter.title}</h3>
          <GatsbyImage
            image={getImage(node.frontmatter.icon)}
            alt={node.frontmatter.icon_title}
          />
          <div>
            <p>{node.excerpt}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ClientBenefitCard;

import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Office = () => {
  const data = useStaticQuery(graphql`
    query OfficeQuery {
      allMdx(filter: { frontmatter: { category: { eq: "office" } } }) {
        nodes {
          excerpt
          frontmatter {
            name
            address
            city
            country
            country_code
            area_network_code
            phone
            email
            image_alt
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
      <h2>Offices</h2>
      {data.allMdx.nodes.map((node) => (
        <div>
          <h4>{node.frontmatter.name}</h4>
          <GatsbyImage
            image={getImage(node.frontmatter.image)}
            alt={node.frontmatter.image_alt}
          />
          <div>
            <p>{node.excerpt}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} />: {node.frontmatter.address}
          </div>
          <div>
            <p>
              {node.frontmatter.city}, {node.frontmatter.country}
            </p>
          </div>
          <div>
            {node.frontmatter.phone.length > 0 && (
              <p>
                <FontAwesomeIcon icon={faPhone} />:{" "}
                {node.frontmatter.country_code}{" "}
                {node.frontmatter.area_network_code} {node.frontmatter.phone}
              </p>
            )}
          </div>
          <div>
            <p>
              {node.frontmatter.email.length > 0 && (
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />:{" "}
                  {node.frontmatter.email}
                </p>
              )}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Office;

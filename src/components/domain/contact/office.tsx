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
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "contact" }
            domain_section: { eq: "office" }
          }
        }
        sort: { frontmatter: { name: ASC } }
      ) {
        nodes {
          html
          frontmatter {
            section_title
            name
            address
            city
            country
            country_code
            area_network_code
            phone
            email
            office_image {
              childImageSharp {
                gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
              }
            }
            office_image_alt
          }
        }
      }
    }
  `);

  return (
    <>
      <h2>Offices</h2>
      {data.allMarkdownRemark.nodes.map((office) => (
        <div>
          <h4>{office.frontmatter.name}</h4>
          <GatsbyImage
            image={getImage(office.frontmatter.office_image)}
            alt={office.frontmatter.office_image_alt}
          />
          <div dangerouslySetInnerHTML={{ __html: office.html }} />

          <div>
            <FontAwesomeIcon icon={faLocationDot} />:{" "}
            {office.frontmatter.address}
          </div>
          <div>
            <p>
              {office.frontmatter.city}, {office.frontmatter.country}
            </p>
          </div>
          <div>
            {office.frontmatter.phone?.length > 0 && (
              <p>
                <FontAwesomeIcon icon={faPhone} />:{" "}
                {office.frontmatter.country_code}{" "}
                {office.frontmatter.area_network_code}{" "}
                {office.frontmatter.phone}
              </p>
            )}
          </div>
          <div>
            <p>
              {office.frontmatter.email?.length > 0 && (
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />:{" "}
                  {office.frontmatter.email}
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

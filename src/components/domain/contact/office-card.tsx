import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const OfficeCard = () => {
  const data = useStaticQuery(graphql`
    query OfficeCardQuery {
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
                gatsbyImageData(quality: 99, layout: FULL_WIDTH)
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
      <StaticImage
        src="../../../images/contact/building.jpg"
        // layout="fullWidth"
        width={300}
        alt="icon"
      />
      <h2 className="text-4xl text-green-600 ">Our Offices</h2>
      {data.allMarkdownRemark.nodes.map((office) => (
        <div className="flex flex-row">
          <div className="flex flex-col">
            <GatsbyImage
              image={getImage(office.frontmatter.office_image)}
              alt={office.frontmatter.office_image_alt}
            />
            <h4>{office.frontmatter.name}</h4>
            <div className="flex flex-row">
              <div>
                <FontAwesomeIcon icon={faLocationDot} />:{" "}
                {office.frontmatter.address}
              </div>
            </div>
            {office.frontmatter.city}, {office.frontmatter.country}
            <div>
              {office.frontmatter.phone?.length > 0 && (
                <div>
                  <FontAwesomeIcon icon={faPhone} />:{" "}
                  {office.frontmatter.country_code}{" "}
                  {office.frontmatter.area_network_code}{" "}
                  {office.frontmatter.phone}
                </div>
              )}
            </div>
            <div>
              {office.frontmatter.email?.length > 0 && (
                <div>
                  <FontAwesomeIcon icon={faEnvelope} />:{" "}
                  {office.frontmatter.email}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OfficeCard;

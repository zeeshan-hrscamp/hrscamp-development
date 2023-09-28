import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const CompanyProfile = () => {
  const data = useStaticQuery(graphql`
    query CompanyProfileQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "about" }
          domain_section: { eq: "company-profile" }
        }
      ) {
        frontmatter {
          section_title
          company_profile_image_title
          company_profile_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            }
          }
          company_background_image_title
          company_background_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            }
          }
        }
        html
      }
    }
  `);

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 grid content-center">
          <h2 className="text-5xl text-green-600 ">
            {frontmatter.section_title}
          </h2>
        </div>
        <div className="flex flex-col basis-1/2">
          <GatsbyImage
            image={getImage(frontmatter.company_profile_image)}
            alt={frontmatter.company_profile_image_title}
          />
          <GatsbyImage
            image={getImage(frontmatter.company_background_image)}
            alt={frontmatter.company_background_image_title}
          />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;

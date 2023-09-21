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
      <div>
        <h2>{frontmatter.section_title}</h2>
        <div className="flex flex-row">
          <div className="basis-1/2">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <div className="basis-1/2">
            <div>
              <GatsbyImage
                image={getImage(frontmatter.company_profile_image)}
                alt={frontmatter.company_profile_image_title}
              />
            </div>
            <div>
              <GatsbyImage
                image={getImage(frontmatter.company_background_image)}
                alt={frontmatter.company_background_image_title}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;

import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ServiceProfile = () => {
  const data = useStaticQuery(graphql`
    query ServiceProfileQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "service" }
          domain_section: { eq: "service-profile" }
        }
      ) {
        frontmatter {
          section_title
          service_profile_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            }
          }
          service_profile_image_name
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
            <GatsbyImage
              image={getImage(frontmatter.service_profile_image)}
              alt={frontmatter.service_profile_image_name}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceProfile;

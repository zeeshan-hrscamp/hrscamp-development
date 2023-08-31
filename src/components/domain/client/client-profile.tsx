import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ClientProfile = () => {
  const data = useStaticQuery(graphql`
    query ClientProfileQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "client" }
          domain_section: { eq: "client-profile" }
        }
      ) {
        frontmatter {
          section_title
          client_profile_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            }
          }
          client_profile_image_name
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
              image={getImage(frontmatter.client_profile_image)}
              alt={frontmatter.client_profile_image_name}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientProfile;

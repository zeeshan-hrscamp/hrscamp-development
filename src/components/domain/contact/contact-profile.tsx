import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ContactProfile = () => {
  const data = useStaticQuery(graphql`
    query ContactProfileQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "contact" }
          domain_section: { eq: "contact-profile" }
        }
      ) {
        frontmatter {
          section_title
          contact_profile_image {
            childImageSharp {
              gatsbyImageData(quality: 99, layout: FULL_WIDTH)
            }
          }
          contact_profile_image_name
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
            image={getImage(frontmatter.contact_profile_image)}
            alt={frontmatter.contact_profile_image_name}
          />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>
  );
};

export default ContactProfile;

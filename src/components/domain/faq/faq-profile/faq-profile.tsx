import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const FaqProfile = () => {
  const data = useStaticQuery(graphql`
    query FaqProfileQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "faq" }
          domain_section: { eq: "faq-profile" }
        }
      ) {
        frontmatter {
          section_title
          faq_profile_image {
            childImageSharp {
              gatsbyImageData(quality: 99, width: 300, layout: CONSTRAINED)
            }
          }
          faq_profile_image_name
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
            image={getImage(frontmatter.faq_profile_image)}
            alt={frontmatter.faq_profile_image_name}
          />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>
  );
};

export default FaqProfile;

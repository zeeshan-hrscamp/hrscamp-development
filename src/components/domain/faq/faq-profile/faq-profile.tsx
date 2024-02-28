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

  // Check if markdownRemark exists before accessing its properties
  const { markdownRemark } = data || {};
  if (!markdownRemark) {
    return null; // or handle the error in a way that makes sense for your application
  }

  const { frontmatter, html } = markdownRemark;

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 grid content-center">
          <div className="text-40 sm:text-[4rem] leading-[78%] flex relative left-[-0.8rem] mb-15 js-t-lines text-white ml-10 p-2">
            FAQs Demystified:<br></br>
            Your Top Questions <br></br>
            Answered
          </div>
        </div>

        <div className="flex flex-col basis-1/2 mr-4">
          <GatsbyImage
            style={{ height: "45vh", marginTop: "3rem" }}
            image={getImage(frontmatter.faq_profile_image)}
            alt={frontmatter.faq_profile_image_name}
          />
          <div
            className="text-white"
            style={{ marginTop: "1rem", marginBottom: "4rem" }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
  );
};

export default FaqProfile;

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
    <div className="flex flex-col sm:flex-row">
    <div className="flex flex-col sm:basis-1/2 grid content-center">
      <div className="text-30  sm:text-[4rem] leading-[78%] flex relative   js-t-lines text-white ml-10 p-2">
        {frontmatter.section_title}
      </div>
    </div>
    <div className="flex flex-col basis-1/2">
      <GatsbyImage
        style={{
          gridArea: "1/1",
          height: "40vh",
          marginTop: "3rem",
        }}
        image={getImage(frontmatter.service_profile_image)}
        alt={frontmatter.service_profile_image_name}
      />

      <div
        className="text-white mt-[1rem] mb-[2rem] text-md hover:text-green-500 hover:font-bold transition-colors duration-300"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  </div>
</>

  );
};

export default ServiceProfile;

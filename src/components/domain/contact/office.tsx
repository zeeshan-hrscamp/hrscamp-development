import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import OfficeCard from "./office-card";

const Office = () => {
  const data = useStaticQuery(graphql`
    query OfficeQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "contact" }
          domain_section: { eq: "office-profile" }
        }
      ) {
        frontmatter {
          section_title
          office_profile_image {
            childImageSharp {
              gatsbyImageData(quality: 90, layout: FULL_WIDTH)
            }
          }
          office_profile_image_name
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
          <h2 className="text-40 sm:text-[4rem] leading-[78%] flex relative  js-t-lines text-white ml-10 p-2">
            {frontmatter.section_title}
          </h2>
        </div>
        <div className="flex flex-col basis-1/2">
          <GatsbyImage
           style={{
            gridArea: "1/1",
            height: "40vh",
            marginTop: "3rem",
          }}
            image={getImage(frontmatter.office_profile_image)}
            alt={frontmatter.office_profile_image_name}
          />
          <div  style={{
              color: "white",
              marginTop: "0.3rem",
            }} dangerouslySetInnerHTML={{ __html: html }} />
          <hr />
          <OfficeCard />
        </div>
      </div>
    </>
  );
};

export default Office;

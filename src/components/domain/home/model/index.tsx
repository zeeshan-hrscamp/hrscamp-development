import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import RPO from "./recruitment-process-outsourcing";
import RO from "./recruiter-outsourcing";

const Model = () => {
  const data = useStaticQuery(graphql`
    query ModelQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "home" }
          sub_domain: { eq: "home" }
          domain_section: { eq: "model" }
        }
      ) {
        frontmatter {
          section_title
          model_image_title
          model_image {
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
            image={getImage(frontmatter.model_image)}
            alt={frontmatter.model_image_title}
          />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <div className="basis-1/2">
            <RPO />
          </div>
          <div className="basis-1/2">
            <RO />
          </div>
          <button className="bg-green-300">Business Model</button>
        </div>
      </div>
    </>
  );
};

export default Model;

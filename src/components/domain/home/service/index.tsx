import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ServiceCard from "./service-card";

const Service = () => {
  const data = useStaticQuery(graphql`
    query ServiceQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "home" }
          domain_section: { eq: "service" }
        }
      ) {
        frontmatter {
          section_title
          service_image_title
          service_image {
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
            image={getImage(frontmatter.service_image)}
            alt={frontmatter.service_image_title}
          />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <hr />
          <ServiceCard />
          <button className="bg-green-300">Services</button>
        </div>
      </div>
    </>
  );
};

export default Service;

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
      <div>
        <h2>{frontmatter.section_title}</h2>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="basis-1/2">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <div className="basis-1/2">
              <div>
                <GatsbyImage
                  image={getImage(frontmatter.service_image)}
                  alt={frontmatter.service_image_title}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <ServiceCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

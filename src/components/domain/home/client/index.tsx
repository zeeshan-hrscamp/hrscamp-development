import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ClientHomeBenefitCard from "./client-benefit-card";

const Client = () => {
  const data = useStaticQuery(graphql`
    query Client {
      markdownRemark(
        frontmatter: {
          domain: { eq: "home" }
          domain_section: { eq: "client" }
        }
      ) {
        frontmatter {
          section_title
          client_image_title
          client_image {
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
                  image={getImage(frontmatter.client_image)}
                  alt={frontmatter.client_image_title}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <ClientHomeBenefitCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;

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
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 grid content-center">
          <h2 className="text-5xl text-green-600 ">
            {frontmatter.section_title}
          </h2>
        </div>
        <div className="flex flex-col basis-1/2">
          <GatsbyImage
            image={getImage(frontmatter.client_image)}
            alt={frontmatter.client_image_title}
          />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <ClientHomeBenefitCard />
          <button className="bg-green-300">Clients</button>
        </div>
      </div>
    </>
  );
};

export default Client;

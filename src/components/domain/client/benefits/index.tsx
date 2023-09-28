import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import ClientBenefitCard from "./client-benefit-card";

const ClientBenefits = () => {
  const data = useStaticQuery(graphql`
    query ClientBenefitsQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "client" }
          domain_section: { eq: "client-benefits" }
        }
      ) {
        frontmatter {
          section_title
          client_benefit_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            }
          }
          client_benefit_image_alt
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
            image={getImage(frontmatter.client_benefit_image)}
            alt={frontmatter.client_benefit_image_alt}
          />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <ClientBenefitCard />
        </div>
      </div>
    </>
  );
};

export default ClientBenefits;

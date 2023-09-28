import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AugmentedSourcingServiceBenefitCard from "./augmented-sourcing-benefits/augmented-sourcing-service-benefit-card";
import AugmentedSourcingProcessCard from "./augmented-sourcing-process-card";
import AugmentedSourcingBenefits from "./augmented-sourcing-benefits/augmented-sourcing-benefits";

const AugmentedSourcingServiceCard = () => {
  const data = useStaticQuery(graphql`
    query AugmentedSourcingServiceCardQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "service" }
          domain_section: { eq: "offering" }
          section_title: { eq: "Staff Augmentation" }
        }
      ) {
        html
        frontmatter {
          section_title
          service_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 90, layout: CONSTRAINED)
            }
          }
        }
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
            alt={frontmatter.service_image_alt}
          />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <hr />
          <AugmentedSourcingBenefits />
          <hr />
          <AugmentedSourcingProcessCard />
        </div>
      </div>
    </>
  );
};

export default AugmentedSourcingServiceCard;

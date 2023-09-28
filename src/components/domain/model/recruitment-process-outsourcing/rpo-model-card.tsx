import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrainingServiceBenefitCard from "./recruitment-process-outsourcing-benefits/rpo-model-benefit-card";
import TrainingProcessCard from "./rpo-process-card";
import RPOModelBenefitCard from "./recruitment-process-outsourcing-benefits/rpo-model-benefit-card";
import RPOProcessCard from "./rpo-process-card";
import RPOModelBenefits from "./recruitment-process-outsourcing-benefits/rpo-model-benefits";

const RPOModelCard = () => {
  const data = useStaticQuery(graphql`
    query RPOModelCardQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "model" }
          domain_section: { eq: "model" }
          section_title: { eq: "Recruitment Process Outsourcing" }
        }
      ) {
        html
        frontmatter {
          section_title
          model_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            }
          }
          model_image_alt
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
            image={getImage(frontmatter.model_image)}
            alt={frontmatter.model_image_alt}
          />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <hr />
          <RPOModelBenefits />
          <hr />
          <RPOProcessCard />
        </div>
      </div>
    </>
  );
};

export default RPOModelCard;

import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrainingServiceBenefitCard from "./recruiter-outsourcing-benefits/recruiter-outsourcing-model-benefit-card";
import TrainingProcessCard from "./recruiter-outsourcing-process-card";
import RecruiterOutsourcingModelBenefitCard from "./recruiter-outsourcing-benefits/recruiter-outsourcing-model-benefit-card";
import RecruiterOutsourcingProcessCard from "./recruiter-outsourcing-process-card";
import ROModelBenefits from "./recruiter-outsourcing-benefits/ro-model-benefits";

const RecruiterOutsourcingModelCard = () => {
  const data = useStaticQuery(graphql`
    query RecruiterOutsourcingModelCardCard {
      markdownRemark(
        frontmatter: {
          domain: { eq: "model" }
          domain_section: { eq: "model" }
          section_title: { eq: "Recruiter Outsourcing" }
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
          <ROModelBenefits />
          <hr />
          <RecruiterOutsourcingProcessCard />
        </div>
      </div>
    </>
  );
};

export default RecruiterOutsourcingModelCard;

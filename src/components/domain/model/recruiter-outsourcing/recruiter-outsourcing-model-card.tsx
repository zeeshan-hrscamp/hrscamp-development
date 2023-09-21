import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrainingServiceBenefitCard from "./recruiter-outsourcing-model-benefit-card";
import TrainingProcessCard from "./recruiter-outsourcing-process-card";
import RecruiterOutsourcingModelBenefitCard from "./recruiter-outsourcing-model-benefit-card";
import RecruiterOutsourcingProcessCard from "./recruiter-outsourcing-process-card";

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
        }
      }
    }
  `);

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const verticleSectionContainer = `
      flex
      flex-col
    `;

  return (
    <>
      <div className="flex flex-col">
        <div className="pt-5">
          <h1>{frontmatter.section_title}</h1>
          <hr />
        </div>
        <div className="flex flex-row">
          <div className="basis-1/3">
            <GatsbyImage
              image={getImage(frontmatter.service_image)}
              alt={frontmatter.title}
            />
          </div>
          <div className="flex flex-col basis-2/3">
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <hr />
            <RecruiterOutsourcingModelBenefitCard />

            <hr />
            <RecruiterOutsourcingProcessCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecruiterOutsourcingModelCard;

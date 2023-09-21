import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrainingServiceBenefitCard from "./rpo-model-benefit-card";
import TrainingProcessCard from "./rpo-process-card";
import RPOModelBenefitCard from "./rpo-model-benefit-card";
import RPOProcessCard from "./rpo-process-card";

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
            <RPOModelBenefitCard />

            <hr />
            <RPOProcessCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default RPOModelCard;

import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrainingServiceBenefitCard from "./interview-preparation-service-benefit-card";
import TrainingProcessCard from "./interview-preparation-process-card";
import InterviewPreparationServiceBenefitCard from "./interview-preparation-service-benefit-card";
import InterviewPreparationProcessCard from "./interview-preparation-process-card";

const InterviewPreparationServiceCard = () => {
  const data = useStaticQuery(graphql`
    query InterviewPreparationServiceCardQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "service" }
          domain_section: { eq: "offering" }
          section_title: { eq: "Interview Preparation" }
        }
      ) {
        html
        frontmatter {
          section_title
          service_image {
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
            <InterviewPreparationServiceBenefitCard />

            <hr />
            <InterviewPreparationProcessCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default InterviewPreparationServiceCard;

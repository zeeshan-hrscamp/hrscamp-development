import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServiceBenefitCard from "./recruitment-service-benefit-card";
import RecruitmentStepCard from "./recruitment-step-card";

const RecruitmentProcessCard = () => {
  const data = useStaticQuery(graphql`
    query RecruitmentProcessCardQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "service" }
          domain_section: { eq: "process" }
          section_title: { eq: "Recruitment" }
        }
      ) {
        html
        frontmatter {
          section_title
          process_image {
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

  return (
    <>
      <div>
        <h3>How It Works</h3>
        <GatsbyImage
            image={getImage(frontmatter.process_image)}
            alt={frontmatter.section_title}
          />
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <RecruitmentStepCard />
      </div>
    </>
  );
};

export default RecruitmentProcessCard;

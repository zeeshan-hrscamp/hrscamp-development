import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServiceBenefitCard from "../recruitment/recruitment-service-benefit-card";
import RecruitmentStepCard from "../recruitment/recruitment-step-card";
import AugmentedSourcingStepCard from "./augmented-sourcing-step-card";

const AugmentedSourcingProcessCard = () => {
  const data = useStaticQuery(graphql`
    query AugmentedSourcingProcessCardQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "service" }
          domain_section: { eq: "process" }
          section_title: { eq: "Augmented Sourcing" }
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
        <h3>{frontmatter.section_title}</h3>
        {/* <GatsbyImage
            image={getImage(node.frontmatter.process_image)}
            alt={node.frontmatter.section_title}
          /> */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <AugmentedSourcingStepCard />
    </>
  );
};

export default AugmentedSourcingProcessCard;

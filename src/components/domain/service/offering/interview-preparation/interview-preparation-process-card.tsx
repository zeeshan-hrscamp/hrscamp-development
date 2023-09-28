import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrainingStepCard from "./interview-preparation-step-card";
import InterviewPreparationStepCard from "./interview-preparation-step-card";

const InterviewPreparationProcessCard = () => {
  const data = useStaticQuery(graphql`
    query InterviewPreparationProcessCardQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "service" }
          domain_section: { eq: "process" }
          section_title: { eq: "Interview Preparation" }
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
        <h2 className="text-4xl text-green-600">How It Works</h2>
        <GatsbyImage
          image={getImage(frontmatter.process_image)}
          alt={frontmatter.section_title}
        />
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <InterviewPreparationStepCard />
      </div>
    </>
  );
};

export default InterviewPreparationProcessCard;

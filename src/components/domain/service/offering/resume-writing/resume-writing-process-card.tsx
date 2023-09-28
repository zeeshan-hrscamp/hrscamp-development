import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrainingStepCard from "./resume-writing-step-card";
import ResumeWritingStepCard from "./resume-writing-step-card";

const ResumeWritingProcessCard = () => {
  const data = useStaticQuery(graphql`
    query ResumeWritingProcessCardQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "service" }
          domain_section: { eq: "process" }
          section_title: { eq: "Resume Writing" }
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
        <ResumeWritingStepCard />
      </div>
    </>
  );
};

export default ResumeWritingProcessCard;

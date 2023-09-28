import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrainingStepCard from "./rpo-step-card";
import RPOStepCard from "./rpo-step-card";

const RPOProcessCard = () => {
  const data = useStaticQuery(graphql`
    query RPOProcessCardQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "model" }
          domain_section: { eq: "process" }
          section_title: { eq: "Recruitment Process Outsourcing" }
        }
      ) {
        html
        frontmatter {
          section_title
          process_image {
            childImageSharp {
              gatsbyImageData(quality: 99, layout: FULL_WIDTH)
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
        <RPOStepCard />
      </div>
    </>
  );
};

export default RPOProcessCard;

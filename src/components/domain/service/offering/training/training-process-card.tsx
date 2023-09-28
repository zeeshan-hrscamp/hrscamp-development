import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrainingStepCard from "./training-step-card";

const TrainingProcessCard = () => {
  const data = useStaticQuery(graphql`
    query TrainingProcessCardQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "service" }
          domain_section: { eq: "process" }
          section_title: { eq: "Training" }
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
        <TrainingStepCard />
      </div>
    </>
  );
};

export default TrainingProcessCard;

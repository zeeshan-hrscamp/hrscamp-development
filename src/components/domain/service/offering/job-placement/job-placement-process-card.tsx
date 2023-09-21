import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import JobPlacementStepCard from "./job-placement-step-card";

const JobPlacementProcessCard = () => {
  const data = useStaticQuery(graphql`
    query JobPlacementProcessCardQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "service" }
          domain_section: { eq: "process" }
          section_title: { eq: "Job Placement" }
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
        <JobPlacementStepCard />
      </div>
    </>
  );
};

export default JobPlacementProcessCard;

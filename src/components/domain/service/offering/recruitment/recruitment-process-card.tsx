import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServiceBenefitCard from "./recruitment-benefits/recruitment-service-benefit-card";
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
        <h2 className="text-5xl text-white text-green-500 hover:text-green-500 hover:font-bold transition-colors duration-300">
          How It Works
        </h2>
        <GatsbyImage
          style={{
            gridArea: "1/1",
            height: "50vh",
            marginTop: "2rem",
          }}
          image={getImage(frontmatter.process_image)}
          alt={frontmatter.section_title}
        />
        <div
          className="text-white mt-4 text-lg hover:text-green-500 hover:font-bold transition-colors duration-300"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <RecruitmentStepCard />
      </div>
    </>
  );
};

export default RecruitmentProcessCard;

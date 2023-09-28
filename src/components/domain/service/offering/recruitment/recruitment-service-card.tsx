import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import RecruitmentProcessCard from "./recruitment-process-card";
import RecruitmentBenefits from "./recruitment-benefits/recruitment-benefits";

const RecruitmentServiceCard = () => {
  const data = useStaticQuery(graphql`
    query RecruitmentServiceCardQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "service" }
          domain_section: { eq: "offering" }
          section_title: { eq: "Recruitment" }
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
          service_image_alt
        }
      }
    }
  `);

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 grid content-center">
          <h2 className="text-5xl text-green-600 ">
            {frontmatter.section_title}
          </h2>
        </div>
        <div className="flex flex-col basis-1/2">
          <GatsbyImage
            image={getImage(frontmatter.service_image)}
            alt={frontmatter.service_image_alt}
          />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <hr />
          <RecruitmentBenefits />
          <hr />
          <RecruitmentProcessCard />
        </div>
      </div>
    </>
  );
};

export default RecruitmentServiceCard;

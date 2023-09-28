import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import RPOModelBenefitCard from "./rpo-model-benefit-card";
import RecruitmentServiceBenefitCard from "./recruitment-service-benefit-card";

const RecruitmentBenefits = () => {
  const data = useStaticQuery(graphql`
    query RecruitmentBenefitsQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "service" }
          sub_domain: { eq: "benefit" }
          domain_section: { eq: "benefit" }
        }
      ) {
        frontmatter {
          section_title
          model_benefit_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            }
          }
          model_benefit_image_alt
        }
        html
      }
    }
  `);

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <>
      <div className="flex flex-col">
        <GatsbyImage
          image={getImage(frontmatter.model_benefit_image)}
          alt={frontmatter.model_benefit_image_alt}
        />
        <h2 className="text-4xl text-green-600">Why Us?</h2>
        <RecruitmentServiceBenefitCard />
      </div>
    </>
  );
};

export default RecruitmentBenefits;

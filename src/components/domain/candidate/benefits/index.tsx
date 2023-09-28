import * as React from "react";
import CandidateBenefitCard from "./candidate-benefit-card";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const CandidateBenefits = () => {
  const data = useStaticQuery(graphql`
    query CandidateBenefitsQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "candidate" }
          domain_section: { eq: "candidate-benefits" }
        }
      ) {
        frontmatter {
          section_title
          candidate_benefit_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            }
          }
          candidate_benefit_image_alt
        }
        html
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
            image={getImage(frontmatter.candidate_benefit_image)}
            alt={frontmatter.candidate_benefit_image_alt}
          />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <CandidateBenefitCard />
        </div>
      </div>
    </>
  );
};

export default CandidateBenefits;

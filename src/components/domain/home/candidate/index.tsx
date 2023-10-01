import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CandidateHomeBenefitCard from "./candidate-benefit-card";

const Candidate = () => {
  const data = useStaticQuery(graphql`
    query CandidateQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "home" }
          domain_section: { eq: "candidate" }
        }
      ) {
        frontmatter {
          section_title
          candidate_image_title
          candidate_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            }
          }
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
            image={getImage(frontmatter.candidate_image)}
            alt={frontmatter.candidate_image_title}
          />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <hr />
          <CandidateHomeBenefitCard />
          <button className="bg-green-300">Candidate</button>
        </div>
      </div>
    </>
  );
};

export default Candidate;

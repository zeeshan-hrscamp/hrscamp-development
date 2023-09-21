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
      <div>
        <h2>{frontmatter.section_title}</h2>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="basis-1/2">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <div className="basis-1/2">
              <div>
                <GatsbyImage
                  image={getImage(frontmatter.candidate_image)}
                  alt={frontmatter.candidate_image_title}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <CandidateHomeBenefitCard />
          </div>
          <button className="bg-green-300">Candidate</button>
        </div>
      </div>
    </>
  );
};

export default Candidate;

import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecruiterOutsourcingModelBenefitCard = () => {
  const data = useStaticQuery(graphql`
    query RecruiterOutsourcingModelBenefitCardQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "model" }
            domain_section: { eq: "benefit" }
            model_title: { eq: "Recruiter Outsourcing" }
          }
        }
        sort: { frontmatter: { no: ASC } }
      ) {
        nodes {
          html
          frontmatter {
            section_title
            model_benefit_icon {
              childImageSharp {
                gatsbyImageData(quality: 90, width: 90, layout: CONSTRAINED)
              }
            }
            model_benefit_icon_title
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allMarkdownRemark.nodes.map((benefit) => (
        <div className="flex flex-row">
          <div className="flex flex-col grid content-center basis-1/4">
            <GatsbyImage
              image={getImage(benefit.frontmatter.model_benefit_icon)}
              alt={benefit.frontmatter.model_benefit_icon_title}
            />
            <div className="flex justify-center">
              <h5>{benefit.frontmatter.section_title}</h5>
            </div>
          </div>
          <div className="basis-3/4">
            <div dangerouslySetInnerHTML={{ __html: benefit.html }} />
          </div>
        </div>
      ))}
    </>
  );
};

export default RecruiterOutsourcingModelBenefitCard;

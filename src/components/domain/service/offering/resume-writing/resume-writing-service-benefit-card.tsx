import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResumeWritingServiceBenefitCard = () => {
  const data = useStaticQuery(graphql`
    query ResumeWritingServiceBenefitCardQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "service" }
            domain_section: { eq: "benefit" }
            service_title: { eq: "Resume Writing" }
          }
        }
        sort: { frontmatter: { no: ASC } }
      ) {
        nodes {
          html
          frontmatter {
            section_title
            service_benefit_icon {
              childImageSharp {
                gatsbyImageData(quality: 90, width: 90, layout: CONSTRAINED)
              }
            }
            service_benefit_icon_title
          }
        }
      }
    }
  `);

  return (
    <>
      <h2>Why Us?</h2>
      {data.allMarkdownRemark.nodes.map((benefit) => (
        <div className="flex flex-row">
          <div className="flex flex-col basis-1/4">
            <GatsbyImage
              image={getImage(benefit.frontmatter.service_benefit_icon)}
              alt={benefit.frontmatter.service_benefit_icon_title}
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

export default ResumeWritingServiceBenefitCard;

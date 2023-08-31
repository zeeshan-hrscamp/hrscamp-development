import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecruitmentServiceBenefitCard = () => {
  const data = useStaticQuery(graphql`
    query RecruitmentServiceBenefitCardQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "service" }
            domain_section: { eq: "benefit" }
            service_title: { eq: "Recruitment" }
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
                gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
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
      {data.allMarkdownRemark.nodes.map((benefit) => (
        <div>
          <h3>{benefit.frontmatter.section_title}</h3>
          <GatsbyImage
            image={getImage(benefit.frontmatter.service_benefit_icon)}
            alt={benefit.frontmatter.service_benefit_icon_title}
          />
          <div dangerouslySetInnerHTML={{ __html: benefit.html }} />
        </div>
      ))}
    </>
  );
};

export default RecruitmentServiceBenefitCard;

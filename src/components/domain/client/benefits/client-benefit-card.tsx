import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClientBenefitCard = () => {
  const data = useStaticQuery(graphql`
    query ClientBenefitCardQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "client" }
            domain_section: { eq: "benefit" }
          }
        }
        sort: { frontmatter: { no: ASC } }
      ) {
        nodes {
          html
          frontmatter {
            section_title
            benefit_icon {
              childImageSharp {
                gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
              }
            }
            benefit_icon_title
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
              image={getImage(benefit.frontmatter.benefit_icon)}
              alt={benefit.frontmatter.benefit_icon_title}
            />
            <div className="flex justify-center">
              <h5>{benefit.frontmatter.section_title}</h5>
            </div>
          </div>
          <div className="grid content-center basis-3/4">
            <div dangerouslySetInnerHTML={{ __html: benefit.html }} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ClientBenefitCard;

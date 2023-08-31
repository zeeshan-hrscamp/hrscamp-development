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
        <div>
          <h3>{benefit.frontmatter.section_title}</h3>
          <GatsbyImage
            image={getImage(benefit.frontmatter.benefit_icon)}
            alt={benefit.frontmatter.benefit_icon_title}
          />
          <div dangerouslySetInnerHTML={{ __html: benefit.html }} />
        </div>
      ))}
    </>
  );
};

export default ClientBenefitCard;

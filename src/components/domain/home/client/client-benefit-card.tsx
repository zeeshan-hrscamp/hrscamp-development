import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ClientHomeBenefitCard = () => {
  const data = useStaticQuery(graphql`
    query ClientHomeBenefitCardQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "client" }
            domain_section: { eq: "benefit" }
          }
        }
      ) {
        nodes {
          frontmatter {
            section_title
            benefit_icon_title
            benefit_icon {
              childImageSharp {
                gatsbyImageData(quality: 90, width: 200, layout: CONSTRAINED)
              }
            }
          }
          html
        }
      }
    }
  `);

  return (
    <>
      {data.allMarkdownRemark.nodes.map((service) => (
        <div className="flex flex-col p-2">
          <div className="flex justify-center">
            <GatsbyImage
              image={getImage(service.frontmatter.benefit_icon)}
              alt={service.frontmatter.benefit_icon_title}
            />
          </div>
          <div className="flex justify-center">
            <h2>{service.frontmatter.section_title}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default ClientHomeBenefitCard;

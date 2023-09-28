import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

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
      <StaticImage
        src="../../../../images/icon.png"
        width={100}
        height={100}
        alt="icon"
      />
      <h2 className="text-4xl text-green-600">Why Us?</h2>
      {data.allMarkdownRemark.nodes.map((service) => (
        <div className="flex flex-row">
          <div className="flex flex-col grid content-center basis-1/4">
            <GatsbyImage
              image={getImage(service.frontmatter.benefit_icon)}
              alt={service.frontmatter.benefit_icon_title}
            />
            <div className="flex justify-center">
              <h5>{service.frontmatter.section_title}</h5>
            </div>
          </div>
          <div className="basis-3/4">
            <div dangerouslySetInnerHTML={{ __html: service.html }} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ClientHomeBenefitCard;

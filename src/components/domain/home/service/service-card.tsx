import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ServiceCard = () => {
  const data = useStaticQuery(graphql`
    query ServiceCardQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "service" }
            domain_section: { eq: "offering" }
          }
        }
      ) {
        nodes {
          frontmatter {
            section_title
            service_image_title
            service_image {
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
        <div className="flex flex-col">
          <div className="flex justify-center">
            <GatsbyImage
              image={getImage(service.frontmatter.service_image)}
              alt={service.frontmatter.service_image_title}
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

export default ServiceCard;

import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModelCard = () => {
  const data = useStaticQuery(graphql`
    query ModelCardQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "model" }
            domain_section: { eq: "model" }
          }
        }
        sort: { frontmatter: { no: ASC } }
      ) {
        nodes {
          html
          frontmatter {
            section_title
            model_image {
              childImageSharp {
                gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
              }
            }
            model_image_title
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allMarkdownRemark.nodes.map((model) => (
        <div>
          <h3>{model.frontmatter.section_title}</h3>
          <GatsbyImage
            image={getImage(model.frontmatter.model_image)}
            alt={model.frontmatter.model_image_title}
          />
          <div dangerouslySetInnerHTML={{ __html: model.html }} />
        </div>
      ))}
    </>
  );
};

export default ModelCard;

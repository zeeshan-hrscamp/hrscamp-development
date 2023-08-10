import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CompanyProfile = () => {
  const data = useStaticQuery(graphql`
    query CompanyProfileQuery {
      allMdx(
        filter: {
          frontmatter: { category: { eq: "about" }, page: { eq: "about" } }
        }
      ) {
        nodes {
          excerpt
          frontmatter {
            title
            image_name
            image {
              childImageSharp {
                gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
                # gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allMdx.nodes.map((node) => (
        <div>
          <h2>{node.frontmatter.title}</h2>
          <GatsbyImage
            image={getImage(node.frontmatter.image)}
            alt={node.frontmatter.image_name}
          />
          <div>
            <p>{node.excerpt}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CompanyProfile;

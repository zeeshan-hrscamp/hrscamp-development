import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClientCompanyCard = () => {
  const data = useStaticQuery(graphql`
    query ClientCompanyCardQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "client" }
            domain_section: { eq: "company" }
          }
        }
        sort: { frontmatter: { no: ASC } }
      ) {
        nodes {
          html
          frontmatter {
            company_name
            company_website
            company_lindedin_address
            company_facebook_address
            company_instagram_address
            company_logo {
              childImageSharp {
                gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allMarkdownRemark.nodes.map((node) => (
        <div>
          <h3>{node.frontmatter.company_name}</h3>
          <GatsbyImage
            image={getImage(node.frontmatter.company_logo)}
            alt={node.frontmatter.company_name}
          />
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))}
    </>
  );
};

export default ClientCompanyCard;

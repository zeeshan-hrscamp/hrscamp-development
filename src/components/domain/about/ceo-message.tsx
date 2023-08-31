import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const CeoMessage = () => {
  const data = useStaticQuery(graphql`
    query CeoMessageQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "about" }
          domain_section: { eq: "ceo-message" }
        }
      ) {
        frontmatter {
          section_title
          name
          role
          lindedin_address
          email
          ceo_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            }
          }
        }
        html
      }
    }
  `);

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <>
      <div>
        <h2>{frontmatter.section_title}</h2>
        <div className="flex flex-row">
          <div className="basis-1/2">
            <h3>{frontmatter.name}</h3>
            <h4>{frontmatter.role}</h4>
            <div>
              {frontmatter.lindedin_address.length > 0 && (
                <a href={frontmatter.lindedin_address}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              )}
              {frontmatter.lindedin_address.length > 0 && (
                <a href={`mailto:${frontmatter.email}`}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              )}
            </div>
            <GatsbyImage
              image={getImage(frontmatter.ceo_image)}
              alt={frontmatter.name}
            />
          </div>
          <div className="basis-1/2">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CeoMessage;

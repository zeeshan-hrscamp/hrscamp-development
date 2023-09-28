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
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 grid content-center">
          <h2 className="text-5xl text-green-600 ">
            {frontmatter.section_title}
          </h2>
        </div>
        <div className="flex flex-col basis-1/2">
          <GatsbyImage
            image={getImage(frontmatter.ceo_image)}
            alt={frontmatter.name}
          />
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
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>
  );
};

export default CeoMessage;

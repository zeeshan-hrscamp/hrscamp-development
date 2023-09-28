import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faSquareFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaProfile = () => {
  const data = useStaticQuery(graphql`
    query SocialMediaProfileQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "contact" }
          domain_section: { eq: "social-media" }
        }
      ) {
        frontmatter {
          section_title
          social_media_profile_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            }
          }
          social_media_profile_image_name
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
            image={getImage(frontmatter.social_media_profile_image)}
            alt={frontmatter.social_media_profile_image_name}
          />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <div>
            <a href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a href="https://facebook.com/thecottoncandid/">
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a href="https://linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaProfile;

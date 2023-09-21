import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const TeamProfile = () => {
  const data = useStaticQuery(graphql`
    query TeamProfileQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "team" }
          domain_section: { eq: "team-profile" }
        }
      ) {
        frontmatter {
          section_title
          team_profile_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            }
          }
          team_profile_image_name
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
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <div className="basis-1/2">
            <GatsbyImage
              image={getImage(frontmatter.team_profile_image)}
              alt={frontmatter.team_profile_image_name}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamProfile;

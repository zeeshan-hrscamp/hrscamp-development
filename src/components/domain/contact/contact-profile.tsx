import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactProfile = () => {
  const data = useStaticQuery(graphql`
    query ContactProfileQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "contact" }
          domain_section: { eq: "contact-profile" }
        }
      ) {
        frontmatter {
          section_title
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
          <div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactProfile;

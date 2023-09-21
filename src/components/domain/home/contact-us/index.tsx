import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SocialPageLink from "./social-page-link";
import OfficeLink from "./office-link";
import ContactFormLink from "./contact-form-link";

const ContactUs = () => {
  const data = useStaticQuery(graphql`
    query ContactUsQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "home" }
          domain_section: { eq: "contact-us" }
        }
      ) {
        frontmatter {
          section_title
          contact_us_email
          contact_us_image_title
          contact_us_image {
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
        <div className="flex justify-center">
          <div className="font-sans text-5xl text-green-500">
            {frontmatter.contact_us_email}
          </div>
          <div>
            <GatsbyImage
              image={getImage(frontmatter.contact_us_image)}
              alt={frontmatter.contact_us_image_title}
            />
          </div>
        </div>

        <div className="flex flex-row">
          <div className="basis-1/3">
            <ContactFormLink />
          </div>
          <div className="basis-1/3">
            <OfficeLink />
          </div>
          <div className="basis-1/3">
            <SocialPageLink />
          </div>
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      </div>
    </>
  );
};

export default ContactUs;

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
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col sm:basis-1/2 grid content-center">
          <div className="text-50 sm:text-[4rem] leading-[78%] flex relative  js-t-lines text-white ml-10 p-2">
            Stay Connected , <br></br>
            <br></br> Stay Informed
          </div>
        </div>
        <div className="flex flex-col basis-1/2">
          <GatsbyImage
            style={{
              gridArea: "1/1",
              height: "50vh",
              marginTop: "3rem",
            }}
            image={getImage(frontmatter.social_media_profile_image)}
            alt={frontmatter.social_media_profile_image_name}
          />
          <div
            style={{
              color: "white",
              marginTop: "2rem",
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div>
            <div className="flex gap-2 mb-7">
              {/* <!-- Facebook --> */}
              <div className=" bg-[#989aa0] p-2 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="currentColor"
                  style={{ color: "#1877f2", cursor: "pointer" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </div>
              {/* <!-- Twitter --> */}
              <div className=" p-2 bg-[#989aa0] rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="currentColor"
                  style={{ color: "#1da1f2", cursor: "pointer" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </div>
              {/* <!-- Linkedin --> */}
              <div className="p-2 bg-[#989aa0] rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="currentColor"
                  style={{ color: "#0077b5", cursor: "pointer" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaProfile;

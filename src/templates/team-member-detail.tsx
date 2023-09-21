import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Seo from "../components/base/seo/seo";
import Layout from "../components/base/layout";

// query ($slug: String!) {
export const query = graphql`
  query ($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        section_title
        name
        role
        email
        lindedin_address
        profile_image {
          childImageSharp {
            gatsbyImageData(quality: 90, width: 200, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;

// const TeamMemberDetailTemplate = ({ data: { markdownRemark: person } }) => {
const TeamMemberDetailTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <div>
        <Layout>
          <h2>{frontmatter.section_title}</h2>
          <h3>{frontmatter.name}</h3>
          <div>
            <p>{frontmatter.role}</p>
          </div>
          <GatsbyImage
            image={getImage(frontmatter.profile_image)}
            alt={frontmatter.name}
          />
          <div>
            {frontmatter.lindedin_address.length > 0 && (
              <a href={frontmatter.lindedin_address}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            )}
          </div>
          <div>
            {frontmatter.lindedin_address.length > 0 && (
              <a href={`mailto:${frontmatter.email}`}>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            )}
          </div>
          <div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          {/* {children} */}
        </Layout>
      </div>

      {/* <div>
        <h2>{person.frontmatter.section_title}</h2>
        <h3>{person.frontmatter.name}</h3>
        <div>
          <p>{person.frontmatter.role}</p>
        </div>
        <GatsbyImage
          image={getImage(person.frontmatter.profile_image)}
          alt={person.frontmatter.name}
        />
        <div>
          {person.frontmatter.lindedin_address.length > 0 && (
            <a href={person.frontmatter.lindedin_address}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          )}
        </div>
        <div>
          {person.frontmatter.lindedin_address.length > 0 && (
            <a href={`mailto:${person.frontmatter.email}`}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          )}
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: person.html }} />
        </div>
      </div> */}
    </>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default TeamMemberDetailTemplate;

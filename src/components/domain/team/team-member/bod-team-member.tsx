import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const BODTeamMember = () => {
  const data = useStaticQuery(graphql`
    query BODTeamMemberQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: { domain: { eq: "team" }, domain_section: { eq: "bod" } }
          # sort: { frontmatter: { date: DESC } }
        }
        sort: { frontmatter: { name: ASC } }
      ) {
        nodes {
          frontmatter {
            slug
            section_title
            name
            role
            email
            lindedin_address
            profile_image {
              childImageSharp {
                gatsbyImageData(quality: 90, width: 500, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <h2>Board of Directors</h2>
      <hr />
      <div className="flex flex-row p-3">
        {data.allMarkdownRemark.nodes.map((person) => (
          <div className="flex flex-col p-3">
            <div>
              <GatsbyImage
                image={getImage(person.frontmatter.profile_image)}
                alt={person.frontmatter.name}
              />
              <Link to={`/team/${person.frontmatter.slug}`}>
                <h3>{person.frontmatter.name}</h3>
              </Link>
            </div>
            <div>
              <p>{person.frontmatter.role}</p>
            </div>
            <div className="flex flex-row p-1">
              <div className="p-1">
                {person.frontmatter.lindedin_address.length > 0 && (
                  <a href={person.frontmatter.lindedin_address}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                )}
              </div>
              <div className="p-1">
                {person.frontmatter.lindedin_address.length > 0 && (
                  <a href={`mailto:${person.frontmatter.email}`}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BODTeamMember;

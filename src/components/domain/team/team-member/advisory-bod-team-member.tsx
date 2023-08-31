import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const AdvisoryBODTeamMember = () => {
  const data = useStaticQuery(graphql`
    query AdvisoryBODTeamMemberQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "team" }
            domain_section: { eq: "advisory-bod" }
          }
        }
        sort: { frontmatter: { name: ASC } }
      ) {
        nodes {
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
    }
  `);

  return (
    <>
      <h2>Advisory Board of Directors</h2>
      {data.allMarkdownRemark.nodes.map((person) => (
        <div>
          <Link to={`/team/${person.frontmatter.slug}`}>
            <h3>{person.frontmatter.name}</h3>
          </Link>
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
        </div>
      ))}
    </>
  );
};

export default AdvisoryBODTeamMember;

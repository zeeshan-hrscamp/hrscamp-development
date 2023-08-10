import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CandidateTestimonialCard = () => {
  const data = useStaticQuery(graphql`
    query CandidateTestimonialCardQuery {
      allMdx(
        filter: {
          frontmatter: {
            domain: { eq: "candidate" }
            sub_domain: { eq: "testimonial" }
          }
        }
      ) {
        nodes {
          excerpt
          frontmatter {
            company_name
            #company_logo {
            #  childImageSharp {
            #    gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            #  }
            #}
            person_name
            person_role
            person_email
            person_lindedin_address
            person_image {
              childImageSharp {
                gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allMdx.nodes.map((node) => (
        <div>
          <p></p>
          {/* <GatsbyImage
            image={getImage(node.frontmatter.company_logo)}
            alt={node.frontmatter.company_name}
          /> */}
          <p>{node.frontmatter.person_name}</p>
          <p>{node.frontmatter.person_role}, {node.frontmatter.company_name}</p>
          <p>{node.frontmatter.person_email}</p>
          <p>{node.frontmatter.person_lindedin_address}</p>
          <GatsbyImage
            image={getImage(node.frontmatter.person_image)}
            alt={node.frontmatter.person_name}
          />
          <div>
            <p>{node.excerpt}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CandidateTestimonialCard;

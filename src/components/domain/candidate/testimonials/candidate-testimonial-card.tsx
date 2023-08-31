import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CandidateTestimonialCard = () => {
  const data = useStaticQuery(graphql`
    query CandidateTestimonialCardQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "candidate" }
            domain_section: { eq: "candidate-testimonial" }
          }
        }
        sort: { frontmatter: { no: ASC } }
      ) {
        nodes {
          html
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
      {data.allMarkdownRemark.nodes.map((node) => (
        <div>
          <p></p>
          {/* <GatsbyImage
            image={getImage(node.frontmatter.company_logo)}
            alt={node.frontmatter.company_name}
          /> */}
          <p>{node.frontmatter.person_name}</p>
          <p>
            {node.frontmatter.person_role}, {node.frontmatter.company_name}
          </p>
          <p>{node.frontmatter.person_email}</p>
          <p>{node.frontmatter.person_lindedin_address}</p>
          <GatsbyImage
            image={getImage(node.frontmatter.person_image)}
            alt={node.frontmatter.person_name}
          />
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))}
    </>
  );
};

export default CandidateTestimonialCard;

import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogProfile = () => {
  const data = useStaticQuery(graphql`
    query BlogProfileQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "blog" }
          domain_section: { eq: "blog-profile" }
        }
      ) {
        frontmatter {
          section_title
          blog_profile_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            }
          }
          blog_profile_image_name
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
              image={getImage(frontmatter.blog_profile_image)}
              alt={frontmatter.blog_profile_image_name}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogProfile;

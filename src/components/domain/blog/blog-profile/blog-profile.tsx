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
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 grid content-center">
          <h2 className="text-5xl text-green-600 ">
            {frontmatter.section_title}
          </h2>
        </div>
        <div className="flex flex-col basis-1/2">
          <GatsbyImage
            image={getImage(frontmatter.blog_profile_image)}
            alt={frontmatter.blog_profile_image_name}
          />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>
  );
};

export default BlogProfile;

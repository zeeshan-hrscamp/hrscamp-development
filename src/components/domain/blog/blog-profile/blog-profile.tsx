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
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col sm:basis-1/2 grid content-center">
          <div className="text-40 sm:text-[4rem] leading-[78%] flex relative  js-t-lines text-white ml-10 p-2">
            {frontmatter.section_title}
          </div>
        </div>
        <div className="flex flex-col basis-1/2">
          <GatsbyImage
            style={{
              gridArea: "1/1",
              height: "45vh",
              marginTop: "3rem",
            }}
            image={getImage(frontmatter.blog_profile_image)}
            alt={frontmatter.blog_profile_image_name}
          />
          <div
            className="text-white mt-[1rem] mb-[2rem] text-md hover:text-green-500 hover:font-bold transition-colors duration-300"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
  );
};

export default BlogProfile;

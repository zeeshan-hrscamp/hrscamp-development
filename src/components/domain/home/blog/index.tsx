import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import BlogCard from "./blog-card";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query BlogQuery {
      markdownRemark(
        frontmatter: { domain: { eq: "home" }, domain_section: { eq: "blog" } }
      ) {
        frontmatter {
          section_title
          blog_image_title
          blog_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            }
          }
          blog_1_title
          blog_1_slug
          blog_1_date
          blog_1_excerpt
          blog_1_image_title
          blog_1_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            }
          }
          blog_2_title
          blog_2_slug
          blog_2_date
          blog_2_excerpt
          blog_2_image_title
          blog_2_image {
            childImageSharp {
              gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
            }
          }
          blog_3_title
          blog_3_slug
          blog_3_date
          blog_3_excerpt
          blog_3_image_title
          blog_3_image {
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
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 grid content-center">
          <h2 className="text-5xl text-green-600 ">
            {frontmatter.section_title}
          </h2>
        </div>
        <div className="flex flex-col basis-1/2">
          <GatsbyImage
            image={getImage(frontmatter.blog_image)}
            alt={frontmatter.blog_image_title}
          />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <BlogCard />
          <button className="bg-green-300">Blogs</button>
        </div>
      </div>
    </>
  );
};

export default Blog;

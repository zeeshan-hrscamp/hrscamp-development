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
      <div className="flex flex-col">
        <h2>{frontmatter.section_title}</h2>
        <div className="flex flex-row p-2">
          <div className="basis-1/2">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <div className="basis-1/2">
            <div>
              <GatsbyImage
                image={getImage(frontmatter.blog_image)}
                alt={frontmatter.blog_image_title}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row p-2">
          <BlogCard />
        </div>
        <button className="bg-green-300">Blogs</button>
      </div>
    </>
  );
};

export default Blog;

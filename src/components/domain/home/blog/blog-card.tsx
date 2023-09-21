import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogCard = () => {
  const data = useStaticQuery(graphql`
    query BlogCardQuery {
      allMdx(
        filter: { frontmatter: { domain: { eq: "blog" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            slug
            description
            blog_post_image_alt
            blog_post_image {
              childImageSharp {
                gatsbyImageData(quality: 90, width: 300, layout: CONSTRAINED)
              }
            }
          }
          id
          excerpt
        }
      }
    }
  `);

  return (
    <>
      {data.allMdx.nodes.map((blogPost) => (
        <div className="flex flex-col p-1">
          <GatsbyImage
            image={getImage(blogPost.frontmatter.blog_post_image)}
            alt={blogPost.frontmatter.blog_post_image_alt}
          />
          <article key={blogPost.id}>
            <h2>
              <Link to={`/blog/${blogPost.frontmatter.slug}`}>
                {blogPost.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {blogPost.frontmatter.date}</p>
            <p>{blogPost.excerpt}</p>
          </article>
        </div>
      ))}
    </>
  );
};

export default BlogCard;

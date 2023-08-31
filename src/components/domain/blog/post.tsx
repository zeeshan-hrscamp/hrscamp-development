import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ blogPost }) => {
  return (
    <div>
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
  );
};

export default BlogPost;

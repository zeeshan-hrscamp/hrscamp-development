import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import { FcAdvance } from "react-icons/fc";
const BlogPost = ({ blogPost }) => {
  return (
    <div className="flex flex-col">
      <h6 className="text-white m-2">Feb-22-24</h6>
      <h2 className="text-white m-2">
        <Link to={`/blog/${blogPost.frontmatter.slug}`}>
          {blogPost.frontmatter.title}
        </Link>
      </h2>
      <GatsbyImage
        style={{
          gridArea: "1/1",
          height: "50vh",
          marginTop: "1rem",
        }}
        className="border-4 m-2 rounded-md "
        image={getImage(blogPost.frontmatter.blog_post_image)}
        alt={blogPost.frontmatter.blog_post_image_alt}
      />
      <article key={blogPost.id} className="m-2">
        <p className="text-white">Posted: {blogPost.frontmatter.date}</p>
        <p className="text-white hover:text-green-500 hover:font-bold transition-colors duration-300">
          {blogPost.excerpt}
        </p>
        <div className="flex gap-2">
          {/* <FcAdvance /> */}
          <h5 className="text-white border-b-2 border-gray-50">Read Article</h5>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;

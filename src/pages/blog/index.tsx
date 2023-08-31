import * as React from "react";
import { Link, graphql } from "gatsby";
import Seo from "../../components/base/seo/seo";
import Layout from "../../components/base/layout";
import BlogPost from "../../components/domain/blog/post";
// import BlogCategory from "../../components/domain/blog/blog-category";

const BlogPage = ({ data }) => {
  return (
    <>
      <Layout>
        <h1>Blogs</h1>
        {/* <BlogCategory /> */}
        <hr />
        {data.allMdx.nodes.map((node) => (
          <BlogPost blogPost={node} />
        ))}
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
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
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;

import * as React from "react";
import { Link, graphql } from "gatsby";
import Seo from "../../components/base/seo/seo";
import Layout from "../../components/base/layout";

const BlogPage = ({ data }) => {
  return (
    <>
      <Layout>
        <h1>Blogs</h1>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </Layout>
    </>
  );
};


export const query = graphql`
  query {
    allMdx(
      filter: {frontmatter: {category: { eq: "blog" }}}
      sort: { frontmatter: { date: DESC } }
      ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;

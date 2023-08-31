import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import { container } from "./blog.css";
import Seo from "../../components/base/seo/seo";
import Layout from "../../components/base/layout";
import SocialPost from "../../components/domain/blog/social-post";

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        blog_post_image_alt
        blog_post_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const BlogPost = ({ data, children }) => {
  const image: IGatsbyImageData | undefined = getImage(
    data.mdx.frontmatter.blog_post_image
  );

  return (
    <div className={container}>
      <Layout>
        <div>
          <SocialPost />
        </div>
        <p>{data.mdx.frontmatter.date}</p>
        <GatsbyImage image={image} alt={data.mdx.frontmatter.blog_post_image_alt} />
        {children}
      </Layout>
    </div>
  );
};

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;

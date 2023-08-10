import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import { container } from "./blog.css";
import Seo from "../../components/base/seo/seo";
import Layout from "../../components/base/layout";

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
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
    data.mdx.frontmatter.hero_image
  );

  return (
    <div className={container}>
      <Layout>
        <p>{data.mdx.frontmatter.date}</p>
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
        <p>
          Photo Credit:{" "}
          <a href={data.mdx.frontmatter.hero_image_credit_link}>
            {data.mdx.frontmatter.hero_image_credit_text}
          </a>
        </p>
        {children}
      </Layout>
    </div>
  );
};

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;

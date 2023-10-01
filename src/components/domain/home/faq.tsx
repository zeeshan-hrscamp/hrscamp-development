import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Faq = () => {
  const data = useStaticQuery(graphql`
    query FaqQuery {
      markdownRemark(
        frontmatter: { domain: { eq: "home" }, domain_section: { eq: "faq" } }
      ) {
        frontmatter {
          section_title
          faq_1
          ans_1
          faq_2
          ans_2
          faq_3
          ans_3
          faq_image_title
          faq_image {
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
          <h2 className="text-5xl text-green-600">
            {frontmatter.section_title}
          </h2>
        </div>
        <div className="flex flex-col basis-1/2">
          <GatsbyImage
            image={getImage(frontmatter.faq_image)}
            alt={frontmatter.faq_image_title}
          />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <hr />
          <div>
            <p>{frontmatter.faq_1}</p>
            <p>{frontmatter.ans_1}</p>
          </div>
          <div>
            <p>{frontmatter.faq_2}</p>
            <p>{frontmatter.ans_2}</p>
          </div>
          <div>
            <p>{frontmatter.faq_3}</p>
            <p>{frontmatter.ans_3}</p>
          </div>
          <button className="bg-green-300">More FAQs</button>
        </div>
      </div>
    </>
  );
};

export default Faq;

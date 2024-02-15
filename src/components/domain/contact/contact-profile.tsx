import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

const ContactProfile = () => {
  const data = useStaticQuery(graphql`
    query ContactProfileQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "contact" }
          domain_section: { eq: "contact-profile" }
        }
      ) {
        frontmatter {
          section_title
          contact_profile_image {
            childImageSharp {
              gatsbyImageData(quality: 99, layout: FULL_WIDTH)
            }
          }
          contact_profile_image_name
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
          <div style={{ display: "grid" }}>
            <GatsbyImage
              style={{
                gridArea: "1/1",
                // You can set a maximum height for the image, if you wish.
                // maxHeight: 600,
              }}
              image={getImage(frontmatter.contact_profile_image)}
              alt={frontmatter.contact_profile_image_name}
            />
            <div
              style={{
                // By using the same grid area for both, they are stacked on top of each other
                gridArea: "1/1",
                position: "relative",
                // This centers the other elements inside the hero component
                placeItems: "center",
                display: "grid",
              }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
            {/* ------------------------------------------------------------ */}
            {/* You can use a GatsbyImage component if the image is dynamic */}
            <StaticImage
              style={{
                gridArea: "1/1",
                // You can set a maximum height for the image, if you wish.
                // maxHeight: 600,
              }}
              layout="fullWidth"
              // You can optionally force an aspect ratio for the generated image
              aspectRatio={3 / 1}
              // This is a presentational image, so the alt should be an empty string
              alt=""
              // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
              src={
                "https://images.unsplash.com/photo-1604975999044-188783d54fb3?w=2589"
              }
              formats={["auto", "webp", "avif"]}
            />
            <div
              style={{
                display: "grid",
                // By using the same grid area for both, they are stacked on top of each other
                gridArea: "1/1",
                // gridArea: "1/4",
                // position: "static",
                position: "relative",
                // position: "absolute",
                // position: "sticky",
                // position: "fixed",
                // This centers the other elements inside the hero component
                placeItems: "center",
                // placeItems: "top",
              }}
            >
              {/* Any content here will be centered in the component */}
              {/* <h1>Hero text</h1> */}
              <h1>HRS CAMP</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactProfile;

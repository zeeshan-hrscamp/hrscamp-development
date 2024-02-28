// import * as React from "react";
// import { graphql, useStaticQuery } from "gatsby";
// import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

// const ContactProfile = () => {
//   const data = useStaticQuery(graphql`
//     query ContactProfileQuery {
//       markdownRemark(
//         frontmatter: {
//           domain: { eq: "contact" }
//           domain_section: { eq: "contact-profile" }
//         }
//       ) {
//         frontmatter {
//           section_title
//           contact_profile_image {
//             childImageSharp {
//               gatsbyImageData(quality: 99, layout: FULL_WIDTH)
//             }
//           }
//           contact_profile_image_name
//         }
//         html
//       }
//     }
//   `);

//   const { markdownRemark } = data;
//   const { frontmatter, html } = markdownRemark;

//   return (
//     <>
//       <div className="flex flex-col sm:flex-row">
//         <div className="flex flex-col sm:basis-1/2 grid content-center">
//           <div className="text-50 sm:text-[4rem] leading-[78%] flex relative  js-t-lines text-white ml-10 p-2">
//             Get in Touch <br></br>
//             <br></br> with HRS Camp!
//           </div>
//         </div>

//         <div className="flex flex-col sm:basis-1/2 ">
//           <GatsbyImage
//             style={{
//               gridArea: "1/1",
//               height: "50vh",
//               marginTop: "5rem",
//             }}
//             image={getImage(frontmatter.contact_profile_image)}
//             alt={frontmatter.contact_profile_image_name}
//           />
//           <div
//             style={{
//               color: "white",
//               marginTop: "6rem",
//             }}
//             dangerouslySetInnerHTML={{ __html: html }}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactProfile;
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
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col sm:basis-1/2 grid content-center">
          <div className="text-50 sm:text-[4rem] leading-[78%] flex relative  js-t-lines text-white ml-10 p-2">
            Get in Touch <br></br>
            <br></br> with HRS Camp!
          </div>
        </div>

        <div className="flex flex-col sm:basis-1/2 ">
          <GatsbyImage
            style={{
              gridArea: "1/1",
              height: "50vh",
              marginTop: "5rem",
            }}
            image={getImage(frontmatter.contact_profile_image)}
            alt={frontmatter.contact_profile_image_name}
          />
          <div
            style={{
              color: "white",
              marginTop: "6rem",
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
  );
};

export default ContactProfile;

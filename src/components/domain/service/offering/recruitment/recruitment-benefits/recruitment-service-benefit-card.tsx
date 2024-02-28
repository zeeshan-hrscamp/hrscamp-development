import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import { FcDown } from "react-icons/fc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecruitmentServiceBenefitCard = () => {
  const data = useStaticQuery(graphql`
    query RecruitmentServiceBenefitCardQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "service" }
            domain_section: { eq: "benefit" }
            service_title: { eq: "Recruitment" }
          }
        }
        sort: { frontmatter: { no: ASC } }
      ) {
        nodes {
          html
          frontmatter {
            section_title
            service_benefit_icon {
              childImageSharp {
                gatsbyImageData(quality: 90, width: 90, layout: CONSTRAINED)
              }
            }
            service_benefit_icon_title
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allMarkdownRemark.nodes.map((benefit) => (
        <div className="flex flex-row">
          <div className="flex flex-col grid content-center basis-1/4">
            <GatsbyImage
              image={getImage(benefit.frontmatter.service_benefit_icon)}
              alt={benefit.frontmatter.service_benefit_icon_title}
            />
          </div>
          <div className="basis-3/4">
            <div className="flex justify-center">
              <h5 className="text-green-300 hover:text-blue-500 hover:font-bold transition-colors duration-300">
                {benefit.frontmatter.section_title}
              </h5>
            </div>
            <div
              className="text-base"
              style={{
                color: "white",
                marginTop: "1rem",
                paddingRight: "1rem",
              }}
            >
              <div
                className="hover:text-green-500 hover:font-bold transition-colors duration-300"
                dangerouslySetInnerHTML={{ __html: benefit.html }}
              />
            </div>
            <div className="flex justify-center mb-4">
              {/* <FcDown
                size={30}
                className="hover:text-green-500 transition-colors duration-300"
              /> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecruitmentServiceBenefitCard;

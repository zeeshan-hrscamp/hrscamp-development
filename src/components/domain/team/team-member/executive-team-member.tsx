import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import AhmadHasnain from "../../../../images/team/ahmad-hasnain.png";
import MahnoorHasnain from "../../../../images/team/mahnoor-hasnain.png";
import MustafaHasnain from "../../../../images/team/mustafa-hasnain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ExecutiveTeamMember = () => {
  const data = useStaticQuery(graphql`
    query ExecutiveTeamMemberQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "team" }
            domain_section: { eq: "executive-team" }
          }
        }
        sort: { frontmatter: { name: ASC } }
      ) {
        nodes {
          frontmatter {
            slug
            section_title
            name
            role
            email
            lindedin_address
            profile_image {
              childImageSharp {
                gatsbyImageData(quality: 90, width: 500, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 grid content-center">
          <h2 className="text-5xl text-green-600 ">Executive Team</h2>
        </div>
        <div className="flex flex-col basis-1/2">
          {/* Ahmed Hasnain card */}
          <div className="relative w-full sm:w-[25rem] h-[25rem] sm:h-[25rem] rounded-[1rem] border-[0.5rem] border-solid border-black overflow-hidden group">
            <img
              src={AhmadHasnain}
              className="slider-workshops__image w-full h-full object-cover"
              width="200"
              height="200"
              alt="Ahmad Hasnain"
            />
            <div className="slider-speakers__name absolute bottom-0 right-0 z-3 transition-opacity duration-300 ">
              <div className="text-white slider-workshops__name--hover relative right-[-2rem] opacity-100 group-hover:opacity-0 flex items-start justify-center font-bold text-16 leading-none uppercase ">
                Ahmed Hasnain
              </div>
              <div className="slider-workshops__name--hover py-25 px-10 relative right-[-5rem] w-full sm:w-[25rem] opacity-0 group-hover:opacity-100 flex items-start justify-center font-bold text-16 leading-none text-white uppercase bg-black rounded-tl-xl">
                <div className="text-white opacity-100 px-6 py-4">
                  Ahmed Hasnain
                </div>
              </div>
            </div>
          </div>

          {/* Mahnoor Hasnain card */}
          <div className="relative w-full mt-4 sm:w-[25rem] h-[25rem] sm:h-[25rem] rounded-[1rem] border-[0.5rem] border-solid border-black overflow-hidden group">
            <img
              src={MustafaHasnain}
              className="slider-workshops__image w-full h-full object-fit"
              width="200"
              height="200"
              alt="Ahmad Hasnain"
            />
            <div className="slider-speakers__name absolute bottom-0 right-0 z-3 transition-opacity duration-300 ">
              <div className="text-white slider-workshops__name--hover relative right-[-2rem] opacity-100 group-hover:opacity-0 flex items-start justify-center font-bold text-16 leading-none uppercase ">
                Mustafa Hasnain
              </div>
              <div className="slider-workshops__name--hover py-25 px-10 relative right-[-5rem] w-full sm:w-[25rem] opacity-0 group-hover:opacity-100 flex items-start justify-center font-bold text-16 leading-none text-white uppercase bg-black rounded-tl-xl">
                <div className="text-white opacity-100 px-6 py-4">
                  Mustafa Hasnain
                </div>
              </div>
            </div>
          </div>
          {/* Mustafa hasnain card */}

          <div className="relative w-full mt-4 sm:w-[25rem] h-[25rem] sm:h-[25rem] rounded-[1rem] border-[0.5rem] border-solid border-black overflow-hidden group">
            <img
              src={MahnoorHasnain}
              className="slider-workshops__image w-full h-full object-fit"
              width="200"
              height="200"
              alt="Ahmad Hasnain"
            />
            <div className="slider-speakers__name absolute bottom-0 right-0 z-3 transition-opacity duration-300 ">
              <div className="text-white slider-workshops__name--hover relative right-[-2rem] opacity-100 group-hover:opacity-0 flex items-start justify-center font-bold text-16 leading-none uppercase ">
                Mahnoor Hasnain
              </div>
              <div className="slider-workshops__name--hover py-25 px-10 relative right-[-5rem] w-full sm:w-[25rem] opacity-0 group-hover:opacity-100 flex items-start justify-center font-bold text-16 leading-none text-white uppercase bg-black rounded-tl-xl">
                <div className="text-white opacity-100 px-6 py-4">
                  Mahnoor Hasnain
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExecutiveTeamMember;

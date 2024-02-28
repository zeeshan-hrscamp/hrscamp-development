import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const OfficeCard = () => {
  const data = useStaticQuery(graphql`
    query OfficeCardQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            domain: { eq: "contact" }
            domain_section: { eq: "office" }
          }
        }
        sort: { frontmatter: { name: ASC } }
      ) {
        nodes {
          frontmatter {
            section_title
            name
            address
            city
            country
            country_code
            area_network_code
            phone
            email
            office_image {
              childImageSharp {
                gatsbyImageData(quality: 99, layout: FULL_WIDTH)
              }
            }
            office_image_alt
          }
        }
      }
    }
  `);

  return (
    <>
      <StaticImage
        src="../../../images/contact/building.jpg"
        // layout="fullWidth"
        width={300}
        alt="icon"
      />
      <h2 className="text-4xl text-green-600 ">Our Offices</h2>
      <div className="flex gap-4 mr-4">
        {data.allMarkdownRemark.nodes.map((office) => (
          <div className="flex flex-row">
            <div className="flex flex-row">
              <div className="relative w-full mt-4 sm:w-[25rem] h-[25rem] sm:h-[25rem] rounded-[1rem] border-[0.5rem] border-solid border-black overflow-hidden group">
                <GatsbyImage
                  className="slider-workshops__image w-full h-full object-fit"
                  width="200"
                  height="200"
                  image={getImage(office.frontmatter.office_image)}
                  alt={office.frontmatter.office_image_alt}
                />
                <div className="slider-speakers__name absolute bottom-0 right-0 z-3 transition-opacity duration-300 ">
                  <div className="text-white slider-workshops__name--hover relative right-[-2rem] opacity-100 group-hover:opacity-0 flex items-start justify-center font-bold text-16 leading-none uppercase ">
                    {office.frontmatter.name}
                  </div>
                  <div className="slider-workshops__name--hover py-25 px-10 relative right-[-5rem] w-full sm:w-[25rem] opacity-0 group-hover:opacity-100 flex items-start justify-center font-bold text-16 leading-none text-white uppercase bg-black rounded-tl-xl">
                    <div className="text-white opacity-100 px-6 py-4">
                      {office.frontmatter.name}
                    </div>
                  </div>
                </div>
              </div>
              {/* <h4>{office.frontmatter.name}</h4> */}
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex mb-[5rem] ">
          <div>
            <div className="flex mt-[2rem]">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="text-white p-2 mt-[-0.6rem]">
                : Faiz Ahmed Faiz Rd, Quaid-e-Azam Industrial <br></br> Estate,
                Lahore, Punjab 54000, Pakistan
              </p>
            </div>
            <div className="flex ">
              <FontAwesomeIcon icon={faPhone} />
              <p className="text-white p-2 mt-[-0.5rem]">: +92 423 111 22 23</p>
            </div>
            <div className="flex ">
              <FontAwesomeIcon icon={faEnvelope} />
              <p className="text-white pl-2 mt-[-0.3rem]">
                :contact@hracamp.com
              </p>
            </div>
          </div>
          <div className="ml-[4rem]">
            <div className="flex mt-[2rem] ">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="text-white p-2 mt-[-0.7rem]">
                : 1 Hyde Park London, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficeCard;

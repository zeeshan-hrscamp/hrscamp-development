import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import EmailBackground from "../../../images/Email.jpg";
const ContactForm = () => {
  const data = useStaticQuery(graphql`
    query ContactFormProfileQuery {
      markdownRemark(
        frontmatter: {
          domain: { eq: "contact" }
          domain_section: { eq: "contact-form" }
        }
      ) {
        frontmatter {
          section_title
          contact_form_profile_image {
            childImageSharp {
              gatsbyImageData(quality: 99, layout: FULL_WIDTH)
            }
          }
          contact_form_profile_image_name
        }
        html
      }
    }
  `);

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const [step, setStep] = useState(0); // Initialize the step state
  const [formValues, setFormValues] = useState({
    floating_first_name: "",
    floating_email: "",
    floating_phone: "",
    floating_subject: "",
    floating_message: "",
  });

  const steps = [
    { label: "What's your name ?", name: "floating_first_name" },
    { label: "What's your email ?", name: "floating_email" },
    { label: "What's your phone number ?", name: "floating_phone" },
    { label: "Subject", name: "floating_subject" },
    { label: "Message", name: "floating_message" },
  ];

  const handleChangeStep = (direction) => {
    if (direction === "next") {
      setStep(step + 1);
    } else {
      setStep(step - 1);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <>
      <div
        className="h-[25rem]"
        style={{
          backgroundImage: ` url(${EmailBackground})`, // Set the background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center mt-[5rem] pt-[5rem]">
          <div className="p-2 text-green-500 bg-slate-600 rounded-2xl font-bold ">
            {" "}
            Contact Us
          </div>
        </div>

        <div className="font-sans font-bold text-5xl text-white mt-8 flex justify-center">
          <a
            href="mailto:hello@hrscamp.com"
            className="email-link hover:text-green-500"
          >
            hello@hrscamp.com
          </a>
        </div>
      </div>

      <div className="flex flex-row mt-[5rem]">
        <div className="flex flex-col basis-1/2 grid content-center">
          <h2 className="text-5xl text-green-600 ">
            {frontmatter.section_title}
          </h2>
        </div>

        <div className="flex flex-col basis-1/2">
          <div>
            <GatsbyImage
              style={{
                gridArea: "1/1",
                height: "50vh",
                marginTop: "5rem",
              }}
              image={getImage(frontmatter.contact_form_profile_image)}
              alt={frontmatter.contact_form_profile_image_name}
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
      </div>
      <div className="mx-3 h-[50rem] ">
        <form className="pt-[25rem]">
          <div className="relative flex z-0 w-full mb-6 group">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name={steps[step].name}
                id={steps[step].name}
                value={formValues[steps[step].name]}
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                onChange={handleInputChange}
                required
              />
              <label
                htmlFor={steps[step].name}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {steps[step].label}
              </label>

              <progress
                value={(step + 1) * (100 / steps.length)} // Calculate the value dynamically
                max="100"
                className="block w-full bg-blue-500 h-[0.1rem]"
              />
            </div>
            <button
              type="button"
              className="text-white hover:text-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800"
              onClick={() => handleChangeStep("next")}
              disabled={step === steps.length - 1}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

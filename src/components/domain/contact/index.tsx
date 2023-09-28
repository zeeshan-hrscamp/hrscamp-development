import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import ContactForm from "./contactForm";
import Office from "./office";
import ContactProfile from "./contact-profile";
import SocialMediaProfile from "./social-media-profile";

const Contact = () => {
  return (
    <>
      <ContactProfile />
      <hr />
      <Office />
      <hr />
      <ContactForm />
      <hr />
      <SocialMediaProfile />
    </>
  );
};

export default Contact;

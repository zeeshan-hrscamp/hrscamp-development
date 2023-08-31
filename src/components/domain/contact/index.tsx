import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import ContactForm from "./contactForm";
import SocialPages from "./socialPages";
import Office from "./office";
import ContactProfile from "./contact-profile";

const Contact = () => {
  return (
    <>
      <ContactProfile />
      <Office />
      <ContactForm />
      <SocialPages />
    </>
  );
};

export default Contact;

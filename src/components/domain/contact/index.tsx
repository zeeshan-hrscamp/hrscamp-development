import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import ContactForm from "./contactForm";
import SocialPages from "./socialPages";
import Office from "./office";

const Contact = () => {
  return (
    <>
      <ContactForm />
      <SocialPages />
      <Office />
    </>
  );
};

export default Contact;

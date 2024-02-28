import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import ContactForm from "./contactForm";
import Office from "./office";
import ContactProfile from "./contact-profile";
import SocialMediaProfile from "./social-media-profile";
import LetsTalk from "../../base/letstalk";
const Contact = () => {
  return (
    <div style={{ background: "#292536" }}>
      <ContactProfile />
      <hr />
      <Office />
      <hr />
      <ContactForm />
      <hr />
      <SocialMediaProfile />
      <hr />
      <LetsTalk />
    </div>
  );
};

export default Contact;

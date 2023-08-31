import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import ClientBenefits from "./benefits";
import ClientCompany from "./companies";
import ClientTestimonials from "./testimonials";
import ClientFaqs from "./faqs";
import ClientProfile from "./client-profile";

const Client = () => {
  return (
    <>
      <ClientProfile />
      <ClientCompany />
      <ClientBenefits />
      <ClientTestimonials />
      <ClientFaqs />
    </>
  );
};

export default Client;

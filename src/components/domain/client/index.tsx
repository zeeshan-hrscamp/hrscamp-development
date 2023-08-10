import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import ClientBenefits from "./benefits";
import ClientCompany from "./companies";
import ClientTestimonials from "./testimonials";
import ClientFaqs from "./faqs";

const Client = () => {
  return (
    <>
      <ClientBenefits />
      <ClientCompany />
      <ClientTestimonials />
      <ClientFaqs />
    </>
  );
};

export default Client;

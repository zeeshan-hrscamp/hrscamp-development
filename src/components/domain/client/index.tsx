import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

import ClientCompany from "./companies";
import ClientTestimonials from "./testimonials";
import ClientFaqs from "./faqs";
import ClientProfile from "./client-profile/client-profile";
import ClientBenefits from "./benefits";

const Client = () => {
  return (
    <>
      <ClientProfile />
      <hr />
      <ClientBenefits />
      <hr />
      <ClientCompany />
      <hr />
      <ClientTestimonials />
      <hr />
      <ClientFaqs />
    </>
  );
};

export default Client;

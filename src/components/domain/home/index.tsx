import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import ContactUs from "./contact-us";
import Faq from "./faq";
import Blog from "./blog";
import Model from "./model";
import Service from "./service";
import Candidate from "./candidate";
import Client from "./client";

const Home = () => {
  return (
    <>
      <Client />
      <hr />
      <Candidate />
      <hr />
      <Service />
      <hr />
      <Model />
      <hr />
      <Blog />
      <hr />
      <Faq />
      <hr />
      <ContactUs />
    </>
  );
};

export default Home;

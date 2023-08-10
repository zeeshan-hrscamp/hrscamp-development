import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import "./layout.css";
import Seo from "../seo/seo";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main id="content" role="main" className="shrink-0">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

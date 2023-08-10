import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "../components/base/seo/seo";
import Layout from "../components/base/layout";
import Contact from "../components/domain/contact";

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Contact />
      </Layout>
    </div>
  );
};

export const Head: HeadFC = () => <Seo title="Contact Us" />;

export default ContactPage;

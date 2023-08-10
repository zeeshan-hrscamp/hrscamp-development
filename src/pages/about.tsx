import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Seo from "../components/base/seo/seo";
import Layout from "../components/base/layout";
import About from "../components/domain/about";

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <About />
      </Layout>
    </div>
  );
};

export const Head: HeadFC = () => <Seo title="About Us" />;

export default AboutPage;

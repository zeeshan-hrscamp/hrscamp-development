import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "../components/base/seo/seo";
import Layout from "../components/base/layout";
import Services from "../components/domain/service";

const ServicesPage = () => {
  return (
    <div>
      <Layout>
        <Services />
      </Layout>
    </div>
  );
};

export const Head: HeadFC = () => <Seo title="Contact Us" />;

export default ServicesPage;

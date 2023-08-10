import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "../components/base/seo/seo";
import Layout from "../components/base/layout";
import Models from "../components/domain/model";

const ModelsPage = () => {
  return (
    <div>
      <Layout>
        <Models />
      </Layout>
    </div>
  );
};

export const Head: HeadFC = () => <Seo title="Contact Us" />;

export default ModelsPage;

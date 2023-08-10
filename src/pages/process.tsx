import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Seo from "../components/base/seo/seo";
import Layout from "../components/base/layout";
import Processes from "../components/domain/process";

const ProcessPage = () => {
  return (
    <div>
      <Layout>
        <Processes />
      </Layout>
    </div>
  );
};

export const Head: HeadFC = () => <Seo title="Process" />;

export default ProcessPage;

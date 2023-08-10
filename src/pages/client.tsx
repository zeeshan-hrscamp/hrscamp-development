import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Seo from "../components/base/seo/seo";
import Layout from "../components/base/layout";
import Client from "../components/domain/client";

const ClientPage = () => {
  return (
    <div>
      <Layout>
        <Client />
      </Layout>
    </div>
  );
};

export const Head: HeadFC = () => <Seo title="Our Clients" />;

export default ClientPage;

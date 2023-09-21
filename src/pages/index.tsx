import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "../components/base/seo/seo";
import Layout from "../components/base/layout";
import Home from "../components/domain/home";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="dark:bg-slate-900 flex flex-col h-full">
      <Layout>
        <div className="flex flex-col">
          <Home />
        </div>
      </Layout>
    </div>
  );
};

export const Head: HeadFC = () => <Seo title="Home Page" />;

export default IndexPage;

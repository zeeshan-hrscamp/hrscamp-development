import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "../components/base/seo/seo";
import Layout from "../components/base/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="dark:bg-slate-900 flex flex-col h-full">
      <Layout>
        {/* <div className="max-w-[85rem] mx-auto py-10 px-4 sm:px-6 lg:px-8"></div> */}
        <div className="flex flex-col">
          <div className="basis-1/4 border-2 border-indigo-600 rounded-lg bg-indigo-400">01</div>
          <div className="basis-1/4 border-2 border-sky-600 rounded-lg bg-sky-400">02</div>
          <div className="basis-1/2 border-2 border-green-600 rounded-lg bg-green-400">03</div>
        </div>
      </Layout>
    </div>
  );
};

export const Head: HeadFC = () => <Seo title="Home Page" />;

export default IndexPage;

import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Seo from "../components/base/seo/seo";
import Layout from "../components/base/layout";
import Statement from "../components/domain/about/statement";
import CompanyProfile from "../components/domain/about/company-profile";
import CeoMessage from "../components/domain/about/ceo-message";
import Faqs from "../components/domain/faq";

const FaqsPage = () => {
  return (
    <div>
      <Layout>
        <Faqs />
      </Layout>
    </div>
  );
};

export const Head: HeadFC = () => <Seo title="About Us" />;

export default FaqsPage;

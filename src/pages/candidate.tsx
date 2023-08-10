import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import Seo from "../components/base/seo/seo";
import Layout from "../components/base/layout";
import Candidate from "../components/domain/candidate";

const CandidatePage = () => {
  return (
    <div>
      <Layout>
        <Candidate />
      </Layout>
    </div>
  );
};

export const Head: HeadFC = () => <Seo title="Candidates" />;

export default CandidatePage;

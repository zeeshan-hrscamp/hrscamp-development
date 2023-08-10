import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Seo from "../components/base/seo/seo";
import Layout from "../components/base/layout";
import Team from "../components/domain/team";

const TeamPage = () => {
  return (
    <div>
      <Layout>
        <Team />
      </Layout>
    </div>
  );
};

export const Head: HeadFC = () => <Seo title="Our Team" />;

export default TeamPage;

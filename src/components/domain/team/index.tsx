import * as React from "react";

import BODTeamMember from "./team-member/bod-team-member";
import ExecutiveTeamMember from "./team-member/executive-team-member";
import AdvisoryBODTeamMember from "./team-member/advisory-bod-team-member";

const Team = () => {
  return (
    <>
      <BODTeamMember />
      <AdvisoryBODTeamMember />
      <ExecutiveTeamMember />
    </>
  );
};

export default Team;

import * as React from "react";

import BODTeamMember from "./team-member/bod-team-member";
import ExecutiveTeamMember from "./team-member/executive-team-member";
import AdvisoryBODTeamMember from "./team-member/advisory-bod-team-member";
import TeamProfile from "./team-profile";

const Team = () => {
  return (
    <>
      <TeamProfile />
      <hr />
      <BODTeamMember />
      <hr />
      <AdvisoryBODTeamMember />
      <hr />
      <ExecutiveTeamMember />
    </>
  );
};

export default Team;

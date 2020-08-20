import React from "react";

import { Community } from "./Community";

interface Community {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
}

interface CommunitiesList extends Array<Community> {}

interface CommunityListProps {
  communities: CommunitiesList;
}

export const CommunityList = (props: CommunityListProps): JSX.Element => {
  return (
    <div>
      {props.communities ? (
        props.communities.map((community) => {
          return <Community community={community} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

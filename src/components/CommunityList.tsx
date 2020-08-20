import React from "react";

import { Community } from "./Community";

interface Community {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
}

interface CommunitiesList extends Array<Community> {}

interface Home {
  id: string;
  communityId: string;
  price: number;
  area: number;
  type: string;
}

interface HomesList extends Array<Home> {}

interface CommunityListProps {
  communities: CommunitiesList;
  homes: HomesList;
}

export const CommunityList = (props: CommunityListProps): JSX.Element => {
  return (
    <div>
      {props.communities ? (
        props.communities
          .sort((a: Community, b: Community) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            let result = 0;
            if (nameA > nameB) {
              result = 1;
            } else if (nameA < nameB) {
              result = -1;
            }
            return result;
          })
          .map((community) => {
            return <Community community={community} key={community.id} />;
          })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

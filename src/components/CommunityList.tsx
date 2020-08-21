import React from "react";
import { Grid } from "semantic-ui-react";

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
  type: "House" | "Condo" | "Townhome";
}

interface HomesList extends Array<Home> {}

interface CommunityListProps {
  communities: CommunitiesList;
  homes: HomesList;
  group: String;
}

export const CommunityList = (props: CommunityListProps): JSX.Element => {
  return (
    <Grid columns={3} style={{ marginTop: "50px" }}>
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
          .filter(
            (community) =>
              community.group === props.group || props.group === "All"
          )
          .map((community) => {
            return (
              <Community
                community={community}
                key={community.id}
                homes={props.homes.filter(
                  (home) => home.communityId === community.id
                )}
              />
            );
          })
      ) : (
        <div>Loading...</div>
      )}
    </Grid>
  );
};

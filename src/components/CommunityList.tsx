import React from "react";
import { Grid } from "semantic-ui-react";

import {
  Community,
  CommunitiesList,
  HomesList,
  PriceRangeTypes,
} from "../interfaces";
import { CommunityCard } from "./CommunityCard";

interface CommunityListProps {
  communities: CommunitiesList;
  homes: HomesList;
  group: String;
  priceRage: PriceRangeTypes;
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
              <CommunityCard
                community={community}
                key={community.id}
                homes={props.homes
                  .filter((home) => home.communityId === community.id)
                  .filter(
                    (home) =>
                      (home.price >= props.priceRage.min &&
                        home.price <= props.priceRage.max) ||
                      props.priceRage.min === ""
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

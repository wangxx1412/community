import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

interface Community {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
}

interface Home {
  id: string;
  communityId: string;
  price: number;
  area: number;
  type: string;
}

interface HomesList extends Array<Home> {}

interface CommunityProps {
  community: Community;
  homes: HomesList;
}

const calAvg = (homes: HomesList) => {
  let sum = 0;
  homes.forEach((home) => {
    sum += home.price;
  });
  if (homes.length) {
    return `$${Math.round((sum / homes.length) * 100) / 100}`;
  } else {
    return "N/A";
  }
};

export const Community = (props: CommunityProps): JSX.Element => {
  return (
    <Card>
      <Image src={props.community.imgUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.community.name}</Card.Header>
        <Card.Meta>{props.community.group}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div>{`Average Price: ${calAvg(props.homes)}`}</div>
      </Card.Content>
    </Card>
  );
};

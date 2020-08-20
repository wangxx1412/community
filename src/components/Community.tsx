import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

interface Community {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
}
interface CommunityProps {
  community: Community;
}

export const Community = (props: CommunityProps): JSX.Element => {
  return (
    <Card>
      <Image src={props.community.imgUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.community.name}</Card.Header>
        <Card.Meta>{props.community.group}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div>
          <Icon name="dollar sign" />
          Average Price
        </div>
      </Card.Content>
    </Card>
  );
};

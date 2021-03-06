import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";

import notfound from "../assets/image-not-found.png";
import { Community, HomesList } from "../interfaces";

interface CommunityProps {
  community: Community;
  homes: HomesList;
}

// For calculate average price
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

export const CommunityCard = (props: CommunityProps): JSX.Element => {
  const [imgUrl, setImgUrl] = useState(props.community.imgUrl);

  //Handle error of imgurl
  const handleError = () => {
    setImgUrl(notfound);
  };

  return (
    <Card centered>
      <Image
        src={imgUrl || notfound}
        onError={() => handleError()}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{props.community.name}</Card.Header>
        <Card.Meta>{props.community.group}</Card.Meta>
        <Card.Description>
          {`${props.homes.length} ${
            props.homes.length === 1 ? "home" : "homes"
          } found in this community`}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div>{`Average Price: ${calAvg(props.homes)}`}</div>
      </Card.Content>
    </Card>
  );
};

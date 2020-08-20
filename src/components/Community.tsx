import React from "react";

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
  return <div>Single Community</div>;
};

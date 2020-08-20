import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Container, Segment } from "semantic-ui-react";

import { CommunityList } from "./CommunityList";

const communityUrl =
  "https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities";

interface Community {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
}

interface CommunitiesList extends Array<Community> {}

export default function App() {
  const [communities, setCommunities] = useState<CommunitiesList | null>(null);

  useEffect(() => {
    //Fetch communities data
    axios.get(communityUrl).then((res: AxiosResponse) => {
      const communitiesList = res.data as CommunitiesList;
      setCommunities(communitiesList);
    });
  }, []);

  return (
    <div>
      {communities ? (
        <CommunityList communities={communities} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

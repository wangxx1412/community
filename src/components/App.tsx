import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Container } from "semantic-ui-react";

import { CommunityList } from "./CommunityList";

const communityUrl =
  "https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities";

const homeUrl =
  "https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes";

interface Community {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
}

interface CommunitiesList extends Array<Community> {}

// Todo: change type of type
interface Home {
  id: string;
  communityId: string;
  price: number;
  area: number;
  type: string;
}

interface HomesList extends Array<Home> {}

export default function App() {
  const [communities, setCommunities] = useState<CommunitiesList | null>(null);
  const [homes, setHomes] = useState<HomesList | null>(null);

  useEffect(() => {
    //Fetch communities data
    axios.get(communityUrl).then((res: AxiosResponse) => {
      const communitiesList = res.data as CommunitiesList;
      setCommunities(communitiesList);
    });
    //Fetch homes data
    axios.get(homeUrl).then((res: AxiosResponse) => {
      const homesList = res.data as HomesList;
      setHomes(homesList);
    });
  }, []);

  return (
    <div>
      <Container>
        {communities && homes ? (
          <CommunityList communities={communities} homes={homes} />
        ) : (
          <div>Loading...</div>
        )}
      </Container>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Menu, Container, Segment } from "semantic-ui-react";

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

interface Home {
  id: string;
  communityId: string;
  price: number;
  area: number;
  type: "House" | "Condo" | "Townhome";
}

interface HomesList extends Array<Home> {}

export default function App() {
  const [communities, setCommunities] = useState<CommunitiesList | null>(null);
  const [homes, setHomes] = useState<HomesList | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Fetch communities data
    axios
      .get(communityUrl)
      .then((res: AxiosResponse) => {
        const communitiesList = res.data as CommunitiesList;
        setCommunities(communitiesList);
      })
      .catch((error) => {
        setError(error);
      });

    //Fetch homes data
    axios
      .get(homeUrl)
      .then((res: AxiosResponse) => {
        const homesList = res.data as HomesList;
        setHomes(homesList);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <Segment inverted>
        <Menu inverted secondary>
          <Container>
            <Menu.Item>YYCHomes</Menu.Item>
          </Container>
        </Menu>
      </Segment>
      <Container>
        {error === null &&
          (communities && homes ? (
            <div>
              <CommunityList communities={communities} homes={homes} />
            </div>
          ) : (
            <div>Loading...</div>
          ))}
        {error !== null && <h2>Error occurs when fetching data</h2>}
      </Container>
    </div>
  );
}

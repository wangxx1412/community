import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Dropdown, Menu, Container, Icon, Segment } from "semantic-ui-react";

import { CommunitiesList, HomesList, PriceRangeTypes } from "../interfaces";
import { CommunityList } from "./CommunityList";
import { PriceRange } from "./PriceRange";

const communityUrl =
  "https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities";

const homeUrl =
  "https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes";

export default function App() {
  const [communities, setCommunities] = useState<CommunitiesList | null>(null);
  const [homes, setHomes] = useState<HomesList | null>(null);
  const [group, setGroup] = useState<String>("All");
  const [error, setError] = useState(null);
  const [priceRange, setPriceRange] = useState<PriceRangeTypes>({
    min: "",
    max: "",
  });

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

  // Get the group text of dropdown item
  const getGroup = (e: any) => {
    setGroup(e.target.textContent);
  };

  const getPriceRange = (min: number | "", max: number | "") => {
    setPriceRange({ min, max });
  };

  return (
    <div>
      <Segment inverted>
        <Menu inverted secondary>
          <Container>
            <Menu.Item>
              <Icon name="home" />
              YYCHomes
            </Menu.Item>
            <Menu.Menu position="right">
              <Dropdown item text="Group">
                <Dropdown.Menu>
                  <Dropdown.Item onClick={(e) => getGroup(e)}>
                    All
                  </Dropdown.Item>
                  <Dropdown.Item onClick={(e) => getGroup(e)}>
                    South East
                  </Dropdown.Item>
                  <Dropdown.Item onClick={(e) => getGroup(e)}>
                    South West
                  </Dropdown.Item>
                  <Dropdown.Item onClick={(e) => getGroup(e)}>
                    North East
                  </Dropdown.Item>
                  <Dropdown.Item onClick={(e) => getGroup(e)}>
                    North West
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Container>
        </Menu>
      </Segment>
      <Container>
        <PriceRange getPriceRange={getPriceRange} />
        {error === null &&
          (communities && homes ? (
            <div>
              <CommunityList
                communities={communities}
                homes={homes}
                group={group}
                priceRage={priceRange}
              />
            </div>
          ) : (
            <div>Loading...</div>
          ))}
        {error !== null && <h2>Error occurs when fetching data</h2>}
      </Container>
    </div>
  );
}

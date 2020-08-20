import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import Community from "./Community";

const communityUrl =
  "https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities";

export default function CommunityList() {
  const [communities, setCommunities] = useState();

  useEffect(() => {
    axios.get(communityUrl).then((res: AxiosResponse) => {
      console.log(res.data);
      setCommunities(res.data);
    });
  }, []);

  return <div>{communities ? <Community /> : <div>Loading...</div>}</div>;
}

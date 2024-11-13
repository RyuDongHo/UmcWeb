import React from "react";
import { fetchRequest } from "../config/apiConfig";
import { isTokenValid } from "../util/tokenUtil";
import { getCookie, setCookie } from "../util/cookies";
import refreshAccessToken from "./refreshAccessToken";
const BASE_URL = import.meta.env.VITE_UMC_BASE_URL;

const useUserInfo = (accessToken) => {
  const [userInfo, setUserInfo] = React.useState();
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchUserInfo = async (accessToken) => {
      if (accessToken === null) {
        console.log("not logged in");
        setLoading(false);
        return;
      }
      if (!isTokenValid(accessToken)) {
        const refreshToken = getCookie("refreshToken");
        const tokens = await refreshAccessToken(refreshToken);
        accessToken = tokens.accessToken;
        setCookie("accessToken", accessToken);
      }
      const fetchUserInfoResult = await fetchRequest(
        "GET",
        `${BASE_URL}/user/me`,
        null,
        accessToken
      );
      setUserInfo(fetchUserInfoResult);
      setLoading(false);
    };

    fetchUserInfo(accessToken);
  }, [accessToken]);

  return [userInfo, loading];
};
export default useUserInfo;

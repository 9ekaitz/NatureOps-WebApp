import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {

  const {auth} = useAuth();

  const refresh = async () => {
    const response = await axios.get("/api/token/refresh", {
      headers : {
        "Authorization":`Bearer ${auth?.refreshToken}`
      }
    });
    auth.setAccessToken(response.data.access_token);
    return response.data.access_token;
  }
  return refresh;
};

export default useRefreshToken;
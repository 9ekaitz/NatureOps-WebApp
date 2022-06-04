import jwt_decode from "jwt-decode";

const accessTokenSaver = (setAuth,response, username)  => {
  const accessToken = response?.data?.access_token;
  const refreshToken = response?.data?.refresh_token;
  const role = jwt_decode(accessToken).roles[0];
  setAuth({username, role, accessToken, refreshToken });
}


export default accessTokenSaver;


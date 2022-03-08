import axios from "axios";
import Cookies from "js-cookie";

const baseURL = process.env.REACT_APP_API_URL;

const apiBase = axios.create({
  baseURL,
});

apiBase.interceptors.request.use(
  async (config) => {
    const accessToken = Cookies.get("access_token");

    if (accessToken) {
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

apiBase.interceptors.response.use(
  (response) => response,
  async (error) => Promise.reject(error)
);

export { apiBase };

import axios from "axios";

export default function requestApi(
  endpoint,
  method,
  body,
  responseType = "json",
  contentType = "application/json"
) {
  const headers = {
    Accept: "application/json",
    "Content-Type": contentType,
  };

  const instance = axios.create({ headers });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access_token");
      console.log("TOKEN:::", token);
      if (token) {
        config.headers["authorization"] = token;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalConfig = error.config;

      if (error.response && error.response.status === 419) {
        try {
          const result = await instance.post(
            `${process.env.REACT_APP_API_URL}/auth/refresh_token`,
            {
              refresh_token: localStorage.getItem("refresh_token"),
            }
          );

          const { access_token, refresh_token } = result.data;
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("refresh_token", refresh_token);

          // Update the original request with the new access_token
          originalConfig.headers["authorization"] = access_token;
          return instance(originalConfig);
        } catch (err) {
          if (err.response && err.response.status === 400) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            window.location.href = "/login";
          }
          return Promise.reject(err);
        }
      }

      return Promise.reject(error);
    }
  );

  // Make the API request with the configured instance
  return instance.request({
    method: method,
    url: `${process.env.REACT_APP_API_URL}${endpoint}`,
    data: body,
    responseType: responseType,
  });
}

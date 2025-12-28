import axious from "axios";

const apiInstance = axious.create({
  baseURL: "https://newsapi.org/v2",
  timeout: 5000,
});

export default apiInstance;

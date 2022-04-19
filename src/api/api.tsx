import axios from "axios";

const baseURL = axios.create({
  withCredentials: false,
  baseURL: "http://26.154.2.2:8080/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  // paramsSerializer: (params) => queryString.stringify(params),
});

export default baseURL;

import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
export default axiosClient;

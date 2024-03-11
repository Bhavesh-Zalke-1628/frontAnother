import axios from "axios";
// it is the base url to connect with backend
const BASE_URL = "http://localhost:4000/api/admin";

//  create an instance of the axios
const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
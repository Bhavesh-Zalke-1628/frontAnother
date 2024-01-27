import axios from "axios";

const BASE_URL = "http://localhost:4000/api/admin";

// http://localhost:5000/api/cource

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
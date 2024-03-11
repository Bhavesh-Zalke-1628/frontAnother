import axios from "axios";
// it is the special axios for the student
const BASE_URL = "http://localhost:4000/api/admin";

const studentAxios = axios.create();

studentAxios.defaults.baseURL = BASE_URL;
studentAxios.defaults.withCredentials = true;

export default studentAxios;
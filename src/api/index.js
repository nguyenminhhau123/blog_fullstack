import axios from "axios";
const URL = "http://localhost:5000";
export const fetchData = () => axios.get(`${URL}/posts`);

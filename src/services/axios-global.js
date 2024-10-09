import axios from "axios";

axios.defaults.withCredentials = true;

axios.defaults.baseURL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_API_URL
    : "http://localhost:5501/api";


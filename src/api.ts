import axios from "axios";

//const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Access-Control-Allow-Oriigin": "*",
    "Content-Type": "application/json",
    //"Authorization": token,
  },
});

export default api;

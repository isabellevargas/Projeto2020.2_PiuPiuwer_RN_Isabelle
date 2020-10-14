import axios from "axios";

const api = axios.create({
  baseURL: "http://piupiuwer.polijr.com.br/",
});

export default api;

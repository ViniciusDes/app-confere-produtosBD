import axios from "axios";

const api = axios.create({
    baseURL: "http:/192.168.100.5:3000/api", //IP da máquina local local obtido no expo -> LAN
  });
  
  export default api;
    
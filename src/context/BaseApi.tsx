import Axios from "axios";

export const BaseApi = Axios.create({
  baseURL: "https://apicardapio.onrender.com/",
});

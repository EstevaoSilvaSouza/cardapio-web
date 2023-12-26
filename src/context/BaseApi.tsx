import Axios from "axios";

export const BaseApi = Axios.create({
  baseURL: "https://apicardapio.onrender.com/",
 // baseURL: "http://10.10.10.50:3080/",
  withCredentials:true
  //producao: "https://apicardapio.onrender.com/",
});

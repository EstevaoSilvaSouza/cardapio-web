import Axios from "axios";

export const BaseApi = Axios.create({
  baseURL: "https://apicardapio.onrender.com/",
  headers:{'Authorization':`Bearer ${localStorage.getItem('XToken-AuthGuard') ? localStorage.getItem('XToken-AuthGuard') : null}`}
   
  //baseURL: "http://10.10.10.50:3080/",
  //producao: "https://apicardapio.onrender.com/",
});

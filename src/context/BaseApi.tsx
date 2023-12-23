import Axios from "axios";

export const BaseApi = Axios.create({
  baseURL: "http://10.10.10.50:3080/",
});

import Axios from "axios";

export const BaseApi = Axios.create({
  baseURL: "http://10.20.20.59:3080/",
});

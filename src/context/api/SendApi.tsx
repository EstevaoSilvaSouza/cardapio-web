import { AxiosResponse } from "axios";
import { BaseApi } from "../BaseApi";

export const Send = async (endpoint: string, type?: string, body?: {}) : Promise<AxiosResponse<any, any> | undefined> => {
  if (type === "post") {
    return await BaseApi.post(endpoint, body);
  }
};

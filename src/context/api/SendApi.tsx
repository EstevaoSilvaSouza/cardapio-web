import { BaseApi } from "../BaseApi";

export const Send = async (endpoint: string, type?: string, body?: {}) => {
  if (type === "post") {
    return await BaseApi.post(endpoint, body);
  }
};

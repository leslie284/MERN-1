import axios from "axios";
import { Config } from "../config/config";

export type HttpMethod = "get" | "post" | "put" | "delete";

export interface RequestObject {
  headers?: { [key: string]: string };
  url: string;
  method: HttpMethod;
  data?: any;
  params?: any;
}

export const fetchApiData = async (requestObj: RequestObject) => {
  const configuration = {
    baseURL: Config.apiUrl,
    headers: { ...requestObj.headers },
    ...requestObj,
  };

  try {
    const response = await axios(configuration);

    return response.data;
  } catch (e) {
    return e;
  }
};

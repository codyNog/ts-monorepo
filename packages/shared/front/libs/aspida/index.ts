import axios from "axios";
import api from "./api/$api";
import aspida from "@aspida/axios";
import { stringify } from "qs";

const client = axios.create({
  baseURL: "http://localhost:8080",
  paramsSerializer: {
    serialize: (params) => stringify(params, { arrayFormat: "brackets" }),
  },
});

export const httpClient = api(aspida(client));
export const v1Client = httpClient.api.v1;

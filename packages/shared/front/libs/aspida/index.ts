import axios, { AxiosRequestConfig } from "axios";
import api from "./api/$api";
import aspida from "@aspida/axios";
import { stringify } from "qs";

const config: AxiosRequestConfig = {
	baseURL: "http://localhost:8080",
	paramsSerializer: {
		serialize: (params) => stringify(params, { arrayFormat: "brackets" }),
	},
};

export const httpClient = api(aspida(axios, config));
export const v1Client = httpClient.api.v1;

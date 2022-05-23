import axios from "axios";
import api from "./api/$api";
import aspida from "@aspida/axios";

const client = axios.create({ baseURL: "http://localhost:8080" });

export const httpClient = api(aspida(client));
export const v1Client = httpClient.api.v1;

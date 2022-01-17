import axios from 'axios';

export const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 15000,
});

export function get<T>(Url: string, params?: any) {
  return API.get<T>(Url, { params });
}

export function post<T>(Url: string, body?: any, params?: any) {
  return API.post<T>(Url, body, { params });
}

import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000' //process.env.MOCK_DB_URL
});

export const apiRequest = async (
  path: string,
  method: 'get' | 'post' | 'put' | 'delete',
  data?: unknown,
  params?: Record<string, unknown>
) => {
  const response = await apiClient({
    url: path,
    method: method,
    data: data,
    params: params, 
  });
  return response.data;
};
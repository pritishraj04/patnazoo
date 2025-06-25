import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/types/api-response";


const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN!;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const fetchData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await apiClient.get<ApiResponse<T>>(endpoint);
    return response.data.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(`Error fetching data from ${endpoint}:`, axiosError.message);
    throw error;
  }
};

import axios from 'axios';
import { TodosResponse } from '@/app/types/todo';

const API_URL = 'https://dummyjson.com';

const api = axios.create({
  baseURL: API_URL,
});

export const getTodos = async (): Promise<TodosResponse> => {
  const response = await api.get<TodosResponse>('/todos');
  console.log(response.data);
  
  return response.data;
};

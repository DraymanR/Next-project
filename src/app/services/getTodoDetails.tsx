import axios from 'axios';
import { Todo } from '@/app/types/todo';

const API_URL = 'https://dummyjson.com';

const api = axios.create({
  baseURL: API_URL,
});

export const getTodoDetails = async (id: number): Promise<Todo> => {
  const response = await api.get<Todo>(`/todos/${id}`);
  return response.data;
};

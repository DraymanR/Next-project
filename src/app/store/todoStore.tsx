import { create } from 'zustand';
import { Todo } from '@/app/types/todo';
import { getTodos } from '../services/todoService';
const myTodos = await getTodos();

interface TodoStore {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
    addTodo: (todo: Todo) => void;
    deleteTodo: (id: number) => void;
    updateTodo: (updatedTodo: Todo) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
    todos: myTodos.todos,
    // todos: JSON.parse('[]'),
    setTodos: (todos) => set({ todos }),
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    deleteTodo: (id) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id),
    })),
    updateTodo: (updatedTodo) => set((state) => ({
        todos: state.todos.map(todo =>
            todo.id === updatedTodo.id ? updatedTodo : todo
        ),
    })),
}));

'use client'
import TodoCard from '@/app/components/todoCard';
import { useTodoStore } from '@/app/store/todoStore';
import Link from 'next/link';

const TodosPage = () => {
  const myTodos = useTodoStore((state) => state.todos);


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <Link href="/pages/todos/add">
        <button className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Add New Todo</button>
      </Link>
      <div className="grid gap-4">
        {myTodos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodosPage;

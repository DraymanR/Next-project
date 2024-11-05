'use client'
import { useEffect, useState } from 'react';
import { getTodos } from '@/app/services/todoService';
import { Todo } from '@/app/types/todo';
import TodoCard from '@/app/components/todoCard';

const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await getTodos();
        setTodos(data.todos);
      } catch (err) {
        setError('Failed to fetch todos');
        console.error(err);
        
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      {error && <p>{error}</p>}
      <div style={cardsContainerStyle}>
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

const cardsContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

export default TodosPage;

'use client'
import { use, useEffect, useState } from 'react';
import { getTodoDetails } from '@/app/services/getTodoDetails';
import { Todo } from '@/app/types/todo';
import Link from 'next/link';
import {TodoDetailsPageProps} from '@/app/types/todo'

const TodoDetailsPage: React.FC<TodoDetailsPageProps> = ({ params: paramsPromise }) => {

  const params = use(paramsPromise);
  const { id } = params;
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodo = async () => {
      setLoading(true);
      try {
        const todoData = await getTodoDetails(Number(id));
        setTodo(todoData);
      } catch (err) {
        setError('Failed to fetch todo details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={pageStyle}>
      <h1>Todo Details</h1>
      {todo ? (
        <div style={cardStyle}>
          <h3>{todo.todo}</h3>
          <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
          <p>User ID: {todo.userId}</p>
        </div>
      ) : (
        <p>Todo not found</p>
      )}
      <Link href="/pages/todos">
        <button style={buttonStyle}>Back to List</button>
      </Link>
    </div>
  );
};

const pageStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const cardStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '300px',
  textAlign: 'center',
};

const buttonStyle: React.CSSProperties = {
  marginTop: '20px',
  padding: '10px 15px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007BFF',
  color: 'white',
  cursor: 'pointer',
};

export default TodoDetailsPage;
import React from 'react';
import { TodoCardProps } from '@/app/types/todo';
import Link from 'next/link';

const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {


  return (
    <div style={cardStyle}>
      <h3>{todo.todo}</h3>
      <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
      <p>User ID: {todo.userId}</p>
      <Link href={`/pages/todos/${todo.id}`} passHref>
        <button style={buttonStyle}>View Details</button>
      </Link>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  margin: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '250px',
  textAlign: 'center',
};

const buttonStyle: React.CSSProperties = {
  marginTop: '10px',
  padding: '8px 12px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007BFF',
  color: 'white',
  cursor: 'pointer',
};

export default TodoCard;
import React, { useState } from 'react';
import { Todo, TodoCardProps } from '@/app/types/todo';
// import Link from 'next/link';
import { useTodoStore } from '../store/todoStore';


const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {

  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo); // Add updateTodo method
  const [editingId, setEditingId] = useState<number | null>(null); // State to track which todo is being edited
  const [updatedTodo, setUpdatedTodo] = useState<Todo | null>(null);

  const handleEditClick = (todo: Todo) => {
    setEditingId(todo.id);
    setUpdatedTodo(todo); // Set the current todo as the updated todo
  };

  const handleSaveClick = () => {
    if (updatedTodo) {
      updateTodo(updatedTodo); // Update the todo
      setEditingId(null); // Reset editing state
      setUpdatedTodo(null); // Reset updated todo
    }
  };


  return (
    <div style={cardStyle}>
      {editingId === todo.id ? (
        <div>
          <input
          style={inputStyle}
            type="text"
            value={updatedTodo?.todo}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo!, todo: e.target.value })}
          />
          <input
          style={inputStyle}
            type="number"
            value={updatedTodo?.userId}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo!, userId: Number(e.target.value) })}
          />
          <select
          style={inputStyle}
            value={updatedTodo?.completed ? 'true' : 'false'}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo!, completed: e.target.value === 'true' })}
          >
            <option value="false">Not Completed</option>
            <option value="true">Completed</option>
          </select>
          <button style={buttonStyle} onClick={handleSaveClick}>Save</button>
          <button style={buttonStyle} onClick={() => setEditingId(null)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{todo.todo}</h3>
          <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
          <p>User ID: {todo.userId}</p>
          <div>
            <button style={buttonStyle} onClick={() => handleEditClick(todo)}>Edit</button>
            <button style={buttonStyle} onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  )
}
const cardStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const buttonStyle: React.CSSProperties = {
  marginBottom: '20px',
  padding: '10px 15px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007BFF',
  color: 'white',
  cursor: 'pointer',
};
const inputStyle: React.CSSProperties = {
  marginBottom: '10px',
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '200px',
};

export default TodoCard;
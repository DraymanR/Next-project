'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTodoStore } from '@/app/store/todoStore'; 
import { Todo } from '@/app/types/todo'; 


const AddTodo = () => {
  const [todoText, setTodoText] = useState('');
  const [userId, setUserId] = useState<number>(1); 
  const [completed, setCompleted] = useState<boolean>(false); 
  const addTodo = useTodoStore((state) => state.addTodo);
  const router = useRouter();

  const handleAddTodo = () => {
    if (todoText.trim()) {
      const newTodo: Todo = {
        id: Date.now(), 
        todo: todoText,
        completed: completed,
        userId: userId,
      };

      addTodo(newTodo);
      router.push('/pages/todos');
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Add a New Todo</h2>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter a new todo"
        style={inputStyle}
      />
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
        placeholder="Enter user ID"
        style={inputStyle}
      />
      <label>
        Completed:
        <select
          value={completed ? 'true' : 'false'}
          onChange={(e) => setCompleted(e.target.value === 'true')}
          style={inputStyle}
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
      </label>
      <button onClick={handleAddTodo} style={buttonStyle}>Add Todo</button>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyle: React.CSSProperties = {
  marginBottom: '10px',
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '200px',
};

const buttonStyle: React.CSSProperties = {
  padding: '8px 12px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007BFF',
  color: 'white',
  cursor: 'pointer',
};

export default AddTodo;

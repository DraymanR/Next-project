'use client'
import { useEffect } from 'react';
import { getTodos } from '@/app/services/todoService';
import TodoCard from '@/app/components/todoCard';
import { useTodoStore } from '@/app/store/todoStore';
import Link from 'next/link';

const TodosPage = () => {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [error, setError] = useState<string | null>(null);
  const setTodos = useTodoStore((state) => state.setTodos);
  const myTodos = useTodoStore((state) => state.todos);

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     try {
  //       const todos = await getTodos();
  //       setTodos(todos.todos);
  //       console.log(myTodos);

  //     } catch (error) {
  //       console.error('Error fetching todos:', error);
  //     }
  //   };

  //   fetchTodos();
  // }, [myTodos]);

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     try {
  //       const data = await getTodos();
  //       setTodos(data.todos);
  //     } catch (err) {
  //       setError('Failed to fetch todos');
  //       console.error(err);
        
  //     }
  //   };

  //   fetchTodos();
  // }, []);

  return (
    <div>
      <h1>Todo List</h1>
      {/* {error && <p>{error}</p>} */}
      <Link href="/pages/todos/add">
        <button style={addButtonStyle}>Add New Todo</button>
      </Link>
      <div style={cardsContainerStyle}>
        {myTodos.map((todo) => (
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
const addButtonStyle: React.CSSProperties = {
  padding: '8px 12px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#28A745',
  color: 'white',
  cursor: 'pointer',
  marginTop: '20px',
}; 

export default TodosPage;

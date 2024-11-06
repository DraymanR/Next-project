import React, { useState } from 'react';
import { Todo, TodoCardProps } from '@/app/types/todo';
import { useTodoStore } from '../store/todoStore';


const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {

  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [updatedTodo, setUpdatedTodo] = useState<Todo | null>(null);

  const handleEditClick = (todo: Todo) => {
    setEditingId(todo.id);
    setUpdatedTodo(todo);
  };

  const handleSaveClick = () => {
    if (updatedTodo) {
      updateTodo(updatedTodo);
      setEditingId(null);
      setUpdatedTodo(null);
    }
  };


  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      {editingId === todo.id ? (
        <div className="space-y-2">
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            type="text"
            value={updatedTodo?.todo}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo!, todo: e.target.value })}
          />
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            type="number"
            value={updatedTodo?.userId}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo!, userId: Number(e.target.value) })}
          />
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={updatedTodo?.completed ? 'true' : 'false'}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo!, completed: e.target.value === 'true' })}
          >
            <option value="false">Not Completed</option>
            <option value="true">Completed</option>
          </select>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition" onClick={handleSaveClick}>Save</button>
          <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition" onClick={() => setEditingId(null)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold">{todo.todo}</h3>
          <p className="text-gray-600">Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
          <p className="text-gray-600">User ID: {todo.userId}</p>
          <div className="flex space-x-2 mt-3">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition" onClick={() => handleEditClick(todo)}>Edit</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TodoCard;
// import React from 'react'

// export const page = () => {
//   return (
//     <div>page</div>
//   )
// }
'use client'
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { getTodos } from '@/app/services/todoService';
import { useTodoStore } from '@/app/store/todoStore';

const Page = ({ Component, pageProps }: AppProps) => {
  const setTodos = useTodoStore((state) => state.setTodos);
  const myTodos = useTodoStore((state) => state.todos);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await getTodos();
        setTodos(todos.todos);
        console.log(myTodos);

      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, [setTodos, myTodos]);

  return <Component {...pageProps} />;
};

export default Page;
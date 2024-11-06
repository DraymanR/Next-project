'use client'
// import { getTodosRespons } from "@/app/services/todoService";
import { Todo } from "@/app/types/todo";
import { useQuery } from "@tanstack/react-query";

function Page() {
    const { data, isLoading, error } = useQuery<{ todos: Todo[] }>({
        queryKey: ['todos'],
        queryFn: async () => {
            // const response = await getTodosRespons()
            const response = await fetch('https://dummyjson.com/todos');
            if (!response.ok) throw new Error('Failed to fetch data');
            return response.json();
        },
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <ul>
            {data && Array.isArray(data.todos)
                ? data.todos.map(todo => (
                    <li key={todo.id}>{todo.todo}</li>
                ))
                : <p>No todos available</p>}
        </ul>
    );
}

export default Page;

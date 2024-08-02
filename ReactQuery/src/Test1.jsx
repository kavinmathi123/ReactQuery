import React from 'react';
import { useQuery, useMutation, QueryClient, useQueryClient } from 'react-query';

const Test1 = () => {
    const queryClient = useQueryClient();
    const { isLoading, data, error } = useQuery({
        queryKey: ["posts"],
        queryFn: () =>
            fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()),
        staleTime: 2000,
        // refetchInterval: 4000,
    });
    const { mutate, isPending, isError, isSuccess } = useMutation({
        mutationFn: (newPost) => fetch("https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                body: JSON.stringify(newPost),
                headers: { "Content-type": "application/json; Charset=UTF-8" }
            }).then((res) => res.json()),
        onSuccess: (newPost) => {
            queryClient.setQueriesData(["posts"], (oldPost) => [...oldPost, newPost]);

        }
    });
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error || isError) {
        return <h1>An error occurred</h1>;
    }

    return (
        <div>
            {isPending && <p>Data is being added</p>}
            <button onClick={() => mutate({
                "userId": 500,
                "id": 400,
                "title": "Welcome to react query",
                "body": "react query body"
            })}>Add Post</button>
            {data.map(todo => (
                <div key={todo.id}>
                    <h5>Todo ID: {todo.id}</h5>
                    <h5>Title: {todo.title}</h5>
                </div>
            ))}
        </div>
    );
}

export default Test1;

import React from 'react';
import { useQuery } from 'react-query';

const apiCall = () => {
    return fetch("https://api.github.com/repos/antonfrancisjeejo/flipkart-clone")
        .then((res) => res.json());
}

const Test1 = () => {
    const { isLoading, data, error } = useQuery("githubData", apiCall);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>An error occurred</h1>;
    }

    return (
        <div>
            <h3>Repo name: {data.name}</h3>
            <h3>Repo forks: {data.forks}</h3>
            <h3>Repo stars: {data.stargazers_count}</h3>
            <h3>Repo subscribers: {data.subscribers_count}</h3>
        </div>
    );
}

export default Test1;

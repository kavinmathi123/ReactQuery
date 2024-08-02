import React, { useState } from 'react';
import { useQuery } from 'react-query';

// display one data when click button and then get the data and display

const Test3 = () => {
    const apiCall = ({ queryKey }) => {
        if (queryKey[1]) {
            return fetch(queryKey[1]).then((res) => res.json());
        }
        throw new Error("URL is missing");
    }
    const [url, setUrl] = useState("");
    const repo1 = useQuery(["githubData", url], apiCall)
    const repo2 = useQuery(
        [
            "githubData",
            "https://api.github.com/repos/antonfrancisjeejo/news-app-react-alan-ai",
        ], apiCall
    );
    if (repo2.isLoading) {
        return <h1>Loading...</h1>;
    }
    console.log(repo1.error);
    if (repo2.error) {
        return <h1>An error occurred {error}</h1>;
    }

    return (
        <div>
            {repo1.data && (
                <div>
                    <h3>Repo name: {repo1.data.name}</h3>
                    <h3>Repo forks: {repo1.data.forks}</h3>
                    <h3>Repo stars: {repo1.data.stargazers_count}</h3>
                    <h3>Repo subscribers: {repo1.data.subscribers_count}</h3>
                </div>
            )}
            <div>
                <h3>Repo name: {repo2.data.name}</h3>
                <h3>Repo forks: {repo2.data.forks}</h3>
                <h3>Repo stars: {repo2.data.stargazers_count}</h3>
                <h3>Repo subscribers: {repo2.data.subscribers_count}</h3>
                <button onClick={() => setUrl("https://api.github.com/repos/antonfrancisjeejo/tinder-clone-expo-app")}> onClick</button>
            </div>
        </div>
    );
}

export default Test3;

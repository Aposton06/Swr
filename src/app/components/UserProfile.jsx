'use client'

import useSWR from "swr";

export default function UserProfile({ id }) {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error, isLoading, isValidating } = useSWR(
        id ? `https://jsonplaceholder.typicode.com/users/${id}` : null, 
        fetcher
    );

    if (error) return <div>Пользователь затерялся в космосе! </div>;
    if (isLoading) return <div>Рассматриваем пользователя в микроскоп... </div>;

    return (
        <div className="user-profile">
            <h2> {data.name}</h2>
            <p> Email: {data.email}</p>
            <p>Телефон: {data.phone}</p>
            {isValidating && <div style={{color: 'blue'}}> Обновляем досье...</div>}
        </div>
    );
}
'use client'

import { useState } from 'react';
import useSWR from "swr";

export default function UserManagement() {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const [selectedUserId, setSelectedUserId] = useState(null);

    const { data: users, error: usersError } = useSWR(
        "https://jsonplaceholder.typicode.com/users",
        fetcher
    );

    const { data: userDetails, error: detailsError } = useSWR(
        selectedUserId ? `https://jsonplaceholder.typicode.com/users/${selectedUserId}` : null,
        fetcher
    );

    if (usersError) return <div>Пользователи играют в прятки! </div>;
    if (!users) return <div>Ищем пользователей... Они точно не в тайной комнате? </div>;

    return (
        <div className="user-management">
            <h2>Клуб избранных пользователей</h2>
            
            <select
                onChange={(e) => setSelectedUserId(e.target.value)}
                value={selectedUserId || ''}
            >
                <option value="">Выберите великого мыслителя</option>
                {users.map(user => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>

            {detailsError && <div>Детали сбежали! Догоняем! 🏃‍♀️</div>}
            {userDetails && (
                <div className="user-details">
                    <h3> Досье пользователя</h3>
                    <p> Email: {userDetails.email}</p>
                    <p> Телефон: {userDetails.phone}</p>
                    <p>Город: {userDetails.address.city}</p>
                    <p>Компания: {userDetails.company.name}</p>
                </div>
            )}
        </div>
    );
}
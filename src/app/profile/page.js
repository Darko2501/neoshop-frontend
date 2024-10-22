"use client";

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

const Profile = () => {
    const { isAuthenticated, login, logout, username } = useAuth(); // Get logout from context
    const [usernameInput, setUsernameInput] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            await login({ username: usernameInput, password });

        } catch (error) {
            setErrorMessage('Failed to log in. Please check your credentials.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {isAuthenticated ? (
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Welcome, {username}!</h1>
                    <button
                        onClick={logout}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={usernameInput}
                            onChange={(e) => setUsernameInput(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            )}
        </div>
    );
};

export default Profile;

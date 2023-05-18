import React, { useState } from 'react';
import Cookies from 'js-cookie';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://127.0.0.1:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `username=${username}&password=${password}`,
        });

        const data = await response.json();

        if (response.ok) {
            Cookies.set('token', data.access_token); // Save token as a cookie
            window.location.href = 'http://localhost:3000/userlist';
        } else {
            console.log(data.detail);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username:
                </label>

                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                />

                <label htmlFor="password">
                    Password:
                </label>

                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                />

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
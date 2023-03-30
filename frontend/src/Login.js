import React, { useState } from 'react'

const Login = () => {
    const [usern, setUsern] = useState([''])
    const [pwd, setPwd] = useState([''])

    function handleLogin(evt) {
        evt.preventDefault();

        fetch('http://127.0.0.1:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'username': usern,
                'password': pwd
            })
        })
        .then(resp => {
            if (!resp.ok) {
                throw new Error('HTTP error ' + resp.status);
            }
            return resp.json();
        })
        .then(data => {
            if (data.access_token) {
                // Store the access token in the browser's local storage or in a cookie
                localStorage.setItem('access_token', data.access_token);
                // Redirect the user to a protected page
                window.location.href = 'http://localhost:3000/addhero';
            } else {
                // Handle the error
                alert('Invalid username or password');
            }
        })
        .catch(err => {
            // Handle the error
            console.error('Error:', err);
            alert('An error occurred. Please try again later.');
        })
        .then(setUsern(''))
        .then(setPwd(''))
    };
    
    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>Username:</label>

                <input
                type='text'
                value={usern}
                required
                autoComplete='off'
                onChange={(evt) => setUsern(evt.target.value)}
                />

                <label>Password:</label>
                <input 
                type='password'
                value={pwd}
                required
                onChange={(evt) => setPwd(evt.target.value)}
                />

                <button>Sign In</button>
            </form>
        </div>
    )
}

export default Login
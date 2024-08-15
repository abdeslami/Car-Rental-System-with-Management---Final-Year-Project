import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Inscription() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    function handleSub(e) {
        e.preventDefault();
        fetch('http://localhost:3001/utilisateur', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                role:"client",
                username: username,
                email: email,
                password: password
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Registration successful:', data);
            alert('Registration successful!');
            navigate(`/user/profile/${data.id}`);
        })
        .catch(error => {
            console.error('Error during registration:', error);
        });
    }

    return (
        <div className='div'>
            <h1>Registration</h1>
            <form onSubmit={handleSub}>
                <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username*" />
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email*" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password*" />
                <button>Register</button>
                <p>
                    Don't have an account? <br/><Link to="/login">LOGIN</Link>
                </p>
            </form>
        </div>
    );
}

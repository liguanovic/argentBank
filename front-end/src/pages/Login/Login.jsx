import React, { useState } from "react";
import { login } from "../../Redux/actions";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Please enter email and password');
            return;
        }

        try {
            const resultAction = await dispatch(login({ email, password, rememberMe }));

            if (login.fulfilled.match(resultAction)) {
                navigate('/profile');
            } else {
                alert('Invalid email or password');
                navigate('/');
            }

        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <main className="main bg-dark">
            <section id="login">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label htmlFor="username">Username</label>
                        <input type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="username" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password" />
                    </fieldset>
                    <fieldset className="remember">
                        <input type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </fieldset>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default Login;

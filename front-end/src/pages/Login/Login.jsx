import React from "react";
// import { useNavigate } from 'react-router-dom';

import './Login.css';

const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [rememberMe, setRememberMe] = useState(false);

    // const dispatch = useDispatch();
    // const navigate = useNavigate();


    return (
    <main className="main bg-dark">
            <section id="login">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h2>Sign In</h2>
                <form>
                    <fieldset>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </fieldset>
                    <fieldset className="remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </fieldset>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    );
};
    
  export default Login;
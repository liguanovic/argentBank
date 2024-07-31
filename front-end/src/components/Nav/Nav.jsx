import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.webp';

import './Nav.css';

const Nav = () => {
    return (
        <nav id="nav">
            <a href="/">
            <img src={logo} alt="Argent Bank Logo" />
            </a>
            <h1 className="sr-only">Argent Bank</h1>

            <ul>
                <li>
                <Link className="main-nav-item" to="/login">
                <i className="fa fa-user-circle"></i>
                    <span>Sign In</span>
                </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
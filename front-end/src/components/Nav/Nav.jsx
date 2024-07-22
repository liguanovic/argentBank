import React from 'react';
import logo from '../../assets/argentBankLogo.webp';

import './Nav.css';

const Nav = () => {
    return (
        <nav id="nav">
            <img src={logo} alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>

            <ul>
                <li>
                <a className="main-nav-item" href="./sign-in.html">
                <i className="fa fa-user-circle"></i>
                    Sign In
        </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
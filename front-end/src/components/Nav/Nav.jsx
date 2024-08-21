import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/actions';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.webp';

import './Nav.css';

const Nav = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);

    const handlelogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate('/');
    };

    return (
        <nav id="nav">
            <a href="/">
                <img src={logo} alt="Argent Bank Logo" />
            </a>
            <h1 className="sr-only">Argent Bank</h1>

            <ul>
                <li>
                    {isAuthenticated ? (
                        <>
                            <NavLink to='/profile'>
                                <i className='fa fa-user-circle main-nav-item'></i>
                                {user.userName}
                            </NavLink>
                            <NavLink to='/' onClick={handlelogout}>
                                <i className='fa fa-sign-out'></i>
                                Sign Out
                            </NavLink>
                        </>
                    ) : (
                        <NavLink className="main-nav-item" to="/login">
                            <i className="fa fa-user-circle"></i>
                            <b>Sign In</b>
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
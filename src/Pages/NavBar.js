import React from "react";
import { NavLink } from 'react-router-dom';
import '../index.css'; 
import carLogo from '../assets/car.png';

function NavBar() {
    return (
        <header className="navbar">
            <div className="container">
                <NavLink className="brand" to='/'>
                    PoolPal
                    <img src={carLogo} alt="Car Logo" className="logo" />
                </NavLink>
                <input className="toggle-input" type="checkbox" id="navbar-open" />
                <label className="toggle-label" htmlFor="navbar-open">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <nav className="nav">
                    <ul className="nav-list">
                        <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to='/CarOption'>Find Pool Buddy</NavLink></li>
                        <li className="signup"><NavLink className={({ isActive }) => isActive ? 'signup-active' : 'signup-inactive'} to='/SignUp'>SignUp</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;

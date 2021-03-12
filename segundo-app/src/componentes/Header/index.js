import React from 'react';
import './style.css';
import logo from './logo.png';

function Header() {
    return (
        <header>Escola SENAI Suíço-Brasileira "Paulo Ernesto Tolle"<img src={logo} id="logo" alt="logo"/></header>
    );
}

export default Header;
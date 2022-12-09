import React from 'react';
import logo from '../img/logo.svg'

function Header() {
    return <header>
        <img className='logo' src={logo} alt="logo" />
    </header>;
}

export default Header;
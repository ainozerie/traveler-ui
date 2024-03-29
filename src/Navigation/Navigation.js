import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

function Navigation() {
    let location = useLocation();
    
    return (
        <nav>
            <Link to={'/'}>
                <span className={location.pathname == '/' ? 'selected' : ''}>Поиск</span>
            </Link>
            <Link to={'myrides'}>
                <span className={location.pathname.includes('myrides') ? 'selected' : ''}>Мои поездки</span>
            </Link>
            <Link to={'profile'}>
                <span className={location.pathname.includes('profile') ? 'selected' : ''}>Профиль</span>
            </Link>
        </nav>
    );
}

export default Navigation;
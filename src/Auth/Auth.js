import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import retrieveDatafromUrl from '../services/retrieveDatafromUrl';

function Auth() {
    const navigate = useNavigate();
    let urlQuery = useLocation();

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setTimeout(() => navigate('/'), 1200);
        }
    }, []);

    // if url has something to be checked
    if (urlQuery.search.length > 0) {
        let userData = retrieveDatafromUrl(urlQuery);

        // if we had user
        if (localStorage.getItem('user')) {
            return (
                <div className='auth'>
                    Выполняется вход...
                </div>
            );
            // if we authorized user
        } else if (userData.success) {
            localStorage.setItem('user', JSON.stringify(userData));
            return (
                <div className='auth'>
                    Выполняется вход...
                </div>
            );
            // unknown user
        } else {
            return (
                <div className='auth'>
                    <a className='entrance' href='https://t.me/Traveler1703Bot'>
                        Авторизоваться через Телеграм
                    </a>
                    <Link to={'/'}>
                        <span>&#8592; Вернуться</span>
                    </Link>
                </div>
            );
        }
        // if url does not have anything to be checked
    } else {
        return (
            <div className='auth'>
                <a className='entrance' href='https://t.me/Traveler1703Bot'>
                    Авторизоваться через Телеграм
                </a>
                <Link to={'/'}>
                    <span>&#8592; Вернуться</span>
                </Link>
            </div>
        );
    }
}

export default Auth;
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import retrieveDatafromUrl from '../services/retrieveDatafromUrl';
import { AuthService } from '../services/AuthService';

function Auth() {

    let authService = new AuthService();

    const navigate = useNavigate();
    let urlQuery = useLocation();

    let [authResult, setAuthResult] = useState(false);

    let token;
    if (localStorage.token) {
        token = localStorage.token
    } else {
        token = Date.now()
        localStorage.setItem('token', token);
    }

    useEffect(() => {
        if (authResult) setTimeout(() => navigate('/'), 5000)
    }, [authResult]);

    const authHandler = () => {
        authService.sendToken(token).then(res => {
            //  at this moment without code.status
            if (token == res.token) {
                localStorage.setItem('user', JSON.stringify(res));
                setAuthResult(true);
            } else {
                console.log('we have not got userInfo');
            }
        })
    }

    // if localStorage is empty and url has something to be checked
    if (localStorage.getItem('user')) {
        setTimeout(() => navigate('/'), 1000)
        return (
            <div className='auth'>
                Выполняется вход...
            </div>
        );
        // if url does not have anything relevant to be checked and localStorage is empty
    } else if (urlQuery.search.length > 0) {
        let userData = retrieveDatafromUrl(urlQuery);

        // if we authorizing user
        if (userData.success) {
            localStorage.setItem('user', JSON.stringify(userData));
            setAuthResult(true);
            return (
                <div className='auth'>
                    Выполняется вход...
                </div>
            );
        }
        // if url does not have anything relevant to be checked and localStorage is empty
    } else {
        return (
            <div className='auth'>
                <a className='auth-button'
                    href={'https://t.me/Traveler1703Bot?' + 'start=' + token}
                    target='_blank'
                    onClick={authHandler}>Войти через Телеграм</a>
                <Link to={'/'}>
                    <span>&#8592; Вернуться</span>
                </Link>
            </div>
        );
    }
}

export default Auth;
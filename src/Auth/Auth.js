import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import retrieveDatafromUrl from '../services/retrieveDatafromUrl';
import { AuthService } from '../services/AuthService';
import Spinner from '../Spinner/Spinner';

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
        if (authResult) setTimeout(() => navigate('/'), 30000)
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

    // if localStorage has user
    if (localStorage.getItem('user')) {
        setTimeout(() => navigate('/'), 30000)
        return (
            <div className='auth'>
                <Spinner />
                Выполняется вход
            </div>
        );
    // if url is checkable
    } else if (urlQuery.search.length > 0) {
        let userData = retrieveDatafromUrl(urlQuery);
        if (userData.success) {
            // we send backend verify request, if result ok -> continue, if not -> relogin
            authService.approveUser(userData).then(res => {
                console.log(res)
            })
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
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import retrieveDatafromUrl from '../services/retrieveDatafromUrl';
import {AuthService} from '../services/AuthService';

function Auth() {

    let authService = new AuthService();

    const navigate = useNavigate();
    let urlQuery = useLocation();

    let [tokenSent, setTokenSent] = useState(false);
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
        if (tokenSent) window.open('https://t.me/Traveler1703Bot?' + 'start=' + token, '_blank');
    }, [authResult, tokenSent]);

    const authHandler = () => {
        setTokenSent(true);
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
    if (urlQuery.search.length > 0) {
        let userData = retrieveDatafromUrl(urlQuery);

        // if we authorizing user
        if (userData.success) {
            // send data to back (user + token)
            authService.saveUser().then(res => {
                console.log('user saved succesfully to the backend');
                // when positive result got save user to localStorage
                if (res) {
                    localStorage.setItem('user', JSON.stringify(userData));
                } else {
                    console.log('user was not saved at backend');
                }
            })
            return (
                <div className='auth'>
                    Выполняется вход...
                </div>
            );
            // url has weird stuff
        } else {
            return (
                <div className='auth'>
                    <button className='auth-button' onClick={authHandler}>
                        Войти через Телеграм
                    </button>
                    <Link to={'/'}>
                        <span>&#8592; Вернуться</span>
                    </Link>
                </div>
            );
        }
        // if url does not have anything to be checked and localStorage is empty
    } else {
        return (
            <div className='auth'>
                <button className='auth-button' onClick={authHandler}>
                    Войти через Телеграм
                </button>
                <Link to={'/'}>
                    <span>&#8592; Вернуться</span>
                </Link>
            </div>
        );
    }
}

export default Auth;
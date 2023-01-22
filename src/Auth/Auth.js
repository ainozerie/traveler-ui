import React, { useEffect } from 'react';
import TelegramLoginButton from 'react-telegram-login';
import {useNavigate} from 'react-router-dom'

function Auth() {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user')) navigate(-1);
    }, []);

    

    const handleTelegramResponse = response => {
        localStorage.setItem('user', JSON.stringify(response));
        navigate(-1);
    };

    return (
        <div className='tg_button_container'>
            <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="Traveler1703Bot" />
        </div>
    );
}

export default Auth;
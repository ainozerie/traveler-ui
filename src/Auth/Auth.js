import React from 'react';
import TelegramLoginButton from 'react-telegram-login';
import {useNavigate} from 'react-router-dom'

function Auth() {
    const navigate = useNavigate();

    const handleTelegramResponse = response => {
        localStorage.setItem('user', JSON.stringify(response));
        navigate(-1);
    };

    return (
        <div className='tg_button_container'>
            <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="Traveler1703Bot" />
            <a href='https://t.me/+42777'>Go в телегу!</a>
        </div>
    );
}

export default Auth;
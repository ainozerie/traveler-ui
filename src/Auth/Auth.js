import React from 'react';
import TelegramLoginButton from 'react-telegram-login';
import { updateSession } from '../store/session/session';
import {useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { toggleIsLoading, changeUser } from '../store/session/session';
import { json } from 'react-router-dom';





function Auth() {
    const isLoading = useSelector(state => state.session.isLoading)
    const navigate = useNavigate();


    const handleTelegramResponse = response => {
        localStorage.setItem('user', JSON.stringify(response));
        navigate(-1);
    };

    return (
        <div class='tg_button_container'>
            <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="Traveler1703Bot" />
        </div>
    );
}

export default Auth;
import React from 'react';
import TelegramLoginButton from 'react-telegram-login';
import {useNavigate, useLocation} from 'react-router-dom'


function Auth() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const { url } = state; // Read values passed on state


    const handleTelegramResponse = response => {
        localStorage.setItem('user', JSON.stringify(response));
        if(url !== undefined){
        navigate(-1);
        }
        else{
            navigate('/auth');
        }
    };

    return (
        <div className='tg_button_container'>
            <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="Traveler1703Bot" />
        </div>
    );
}

export default Auth;
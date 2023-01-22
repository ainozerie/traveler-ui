import React from 'react';
import TelegramLoginButton from 'react-telegram-login';

const handleTelegramResponse = response => {
    console.log(response);
};

function Auth() {
    return (
        <div class='tg_button_container'>
            <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="Traveler1703Bot" />
        </div>
    );
}

export default Auth;
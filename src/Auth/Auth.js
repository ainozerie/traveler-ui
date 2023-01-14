import React from 'react';
import TelegramLoginButton from 'react-telegram-login';

const handleTelegramResponse = response => {
    console.log(response);
};

function Auth() {
    return (
        <>
            <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="Traveler1703Bot" />
        </>
    );
}

export default Auth;
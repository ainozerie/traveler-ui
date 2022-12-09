import React, { Component } from 'react';
import TelegramLoginButton from 'react-telegram-login';

const handleTelegramResponse = response => {
    console.log(response);
};

function Login() {
    return (
        <>
            <p>{process.env.REACT_APP_MY_ENV_VARIABLE}</p>
            <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="Traveler1703Bot" />
        </>
    );
}

export default Login;
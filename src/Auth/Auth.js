import React from 'react';
import TelegramLoginButton from 'react-telegram-login';
import { updateSession } from '../store/session/session';
import { useDispatch, useSelector } from 'react-redux'
import { toggleIsLoading, changeUser } from '../store/session/session';





function Auth() {
    const isLoading = useSelector(state => state.session.isLoading)
    const user = useSelector(state => state.session.user)
    
    const dispatch = useDispatch();


    const handleTelegramResponse = response => {
          dispatch(changeUser('valera'));
          console.log('user is ' + user);
    };



    return (
        <div class='tg_button_container'>
            <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="Traveler1703Bot" />
        </div>
    );
}

export default Auth;
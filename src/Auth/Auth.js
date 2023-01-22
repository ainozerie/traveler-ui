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

          dispatch(changeUser(response));

    };

    const getUser = () => {
        console.log('user is ', user);
    }



    return (
        <div class='tg_button_container'>
            <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="Traveler1703Bot" />
            <button onClick={getUser}>get user!!!!</button>
        </div>
    );
}

export default Auth;
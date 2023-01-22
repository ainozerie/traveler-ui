import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleIsLoading, changeUser } from '../store/session/session';

// for testing matters

function Playground() {
    const isLoading = useSelector(state => state.session.isLoading)
    const user = useSelector(state => state.session.user)

    const dispatch = useDispatch();

    const clicker = () => {
        dispatch(toggleIsLoading())
        console.log(isLoading);
    }
    const setUser = () => {
        dispatch(changeUser('Valera'))
        console.log('user is ', user);
    }

    const getUser = () => {
        console.log('user is ', user);
    }
    return (
        <>
            <p>Playground</p>
            <button onClick={clicker}>toggle loader</button>
            <button onClick={setUser}>set user</button>
            <button onClick={getUser}>get user</button>


        </>
    );
}

export default Playground;
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleIsLoading, changeUser } from '../store/session/session';
import { useDeviceData } from 'react-device-detect';


// for testing matters

function Playground() {

    let browserData = useDeviceData();

    let browserDataString = JSON.stringify(browserData);
    

    localStorage.setItem('user', '{"id":993214357,"first_name":"Sergei","last_name":…c3d57ed393e857d0924ae6c1df2e515a232be0292412320"}');

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
            <p>{browserDataString}</p>
        </>
    );
}

export default Playground;
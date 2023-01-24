import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleIsLoading, changeUser } from '../store/session/session';



// for testing matters

function Playground() {

    // check if browser
    let standalone = window.navigator.standalone,
        userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

    if (ios) {
        if (!standalone && safari) {
            alert('// Safari');
        } else if (!standalone && !safari) {
            alert('// iOS webview');
        };
    } else {
        if (userAgent.includes('wv')) {
            alert('// Android webview');
        } else {
            alert('// Chrome');
        }
    };

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
        </>
    );
}

export default Playground;
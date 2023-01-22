import React, { useEffect, useState } from 'react';

function Profile() {

    const [user, setUser] = useState({});

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')));
            console.log(user);
        } else {
            navigate('/auth');
        }
    }, []);


    return (
        <div className='profile'>
        <h1>Профиль</h1>
        <p>{user.id}</p>
        </div>
    );
}

export default Profile;
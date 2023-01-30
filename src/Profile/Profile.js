import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'


function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')));
            console.log(user);
        } else {
            navigate('/auth');
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    return (
        <div className='profile'>
            <h1>Профиль</h1>
            <div className='profileContent'>
                {user.photo_url && <img className='profilePhoto' src={decodeURIComponent(user.photo_url)} />}
                <p className='profileTitle'>{user.first_name} {user.last_name}</p>
                <span className='logout' onClick={logout}>Выйти</span>
            </div>
        </div>
    );
}

export default Profile;
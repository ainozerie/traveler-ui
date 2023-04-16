import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'


function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')));
        } else {
            navigate('/auth');
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setTimeout(() => window.location.reload(), 1000);
    }

    return (
        <div className='profile'>
            <h1>Профиль</h1>
            <div className='profileContent'>
                {user.photo_url && <img className='profilePhoto' src={decodeURIComponent(user.photo_url)} />}
                {!user.photo_url && <img className='profilePhoto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/242px-Telegram_2019_Logo.svg.png'/>}
                <p className='profileTitle'>{user.first_name} {user.last_name}</p>
                <span className='logout' onClick={logout}>Выйти</span>
            </div>
        </div>
    );
}

export default Profile;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MyRides() {
    const [myRides, setMyRides] = useState([]);

    const displayMyRides = () => {
        if (myRides.length) {
            return myRides.map(ride => {
                return <p>{ride}</p>
            });
        } else {
            return <p>У вас еще нет поездок...</p>
        }
    }

    setTimeout(() => {
        setMyRides(['1', '2', '3']);
    }, 2000);

    return (
        <div className='myRides'>
            <h1>Мои поездки</h1>
            <div>
                {displayMyRides()}
            </div>
            <Link to={'/create'}>
                <button>Создать новую</button>
            </Link>
        </div>
    );
}

export default MyRides;
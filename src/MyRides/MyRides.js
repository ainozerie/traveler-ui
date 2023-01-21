import React from 'react';
import { Link } from 'react-router-dom';

function MyRides() {
    return (
        <>
            <h1>Мои поездки</h1>
            <Link to={'/create'}>
                <button>Создать новую</button>
            </Link>
        </>
    );
}

export default MyRides;
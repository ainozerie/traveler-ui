import React from 'react';
import './Ride.css'

function Ride({ride}) {
    console.log(ride);
    return (
        <div className='ride shadow d-flex'>
            <div className='content-inline-apart'>
                <div className='ride-header'>
                    <img src='https://www.pngall.com/wp-content/uploads/12/Driver-PNG-HD-Image.png' />
                    <p className='username'>{ride.driver.firstname} {ride.driver.surname}</p>
                </div>
                <p className='price'>{ride.price} euro</p>
            </div>
            <div className='ride-content'>
                <p>{ride.description}</p>
            </div>
            <div className='content-inline-apart'>
                <p className='help-text'>Местa: {ride.capacity - ride.currentNumberOfPassengers}</p>
                <a className='connect' href={'https://t.me/' + ride.driver.tgUsername} target='_blank'>Связаться с водителем</a>
            </div>
        </div>
    );
}

export default Ride;
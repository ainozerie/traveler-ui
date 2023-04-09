import React from 'react';
import './Ride.css'

function Ride(props) {

    return (
        <div className='ride shadow d-flex'>
            <div className='content-inline-apart'>
                <div className='ride-header'>
                    <img src='https://www.pngall.com/wp-content/uploads/12/Driver-PNG-HD-Image.png' />
                    <p className='username'>{props.driverId}</p>
                </div>
                <p className='price'>{props.price} euro</p>
            </div>
            <div className='ride-content'>
                <p>{props.description}</p>
            </div>
            <div class="d-flex d-left"><a class="">Осталось мест: {props.numberOfPlacesAvailable}</a></div>
            <div className='d-flex d-right'>
            <a className='connect'>Связаться с водителем</a>
            </div>
        </div>
    );
}

export default Ride;
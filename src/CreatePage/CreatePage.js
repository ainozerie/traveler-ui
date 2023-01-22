import React from 'react';
import { RideService } from '../services/RideService';
import modifyDate from '../services/modifyDate';
import { useDispatch, useSelector } from 'react-redux'

const rideService = new RideService();
let date = new Date();

function CreatePage() {

    const clickHandler = () => {
        rideService.createRide(
            {
                direction: 'RUS',
                date: date.toISOString().split('.')[0].replace('T', '-').replaceAll(':', '-'),
                description: 'RRR',
                price: 10,
                driverId: 1,
                capacity: 1,
                currentNumberOfPassengers: 0,
                status: 'AVAILABLE'
            }
        ).then(res => console.log(res));
    }

    return (
        <>
        <h1>Создать поездку/ Найти попутку</h1>
        <button onClick={clickHandler} >Создать Default</button>
        </>
    );
}

export default CreatePage;
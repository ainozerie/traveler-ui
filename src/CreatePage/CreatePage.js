import React, { useState } from 'react';
import { RideService } from '../services/RideService';
import modifyDate from '../services/modifyDate';
import { useDispatch, useSelector } from 'react-redux'
import Label from '../Filters/Label/Label';
import Counter from '../Filters/Counter/Counter';

const rideService = new RideService();
let today = new Date();
console.log(modifyDate(today));

function CreatePage() {
    const [newRide, setNewRide] = useState({
        direction: 'FIN',
        when: modifyDate(today),
        description: '',
        price: 10,
        capacity: '3',
        status: 'AVAILABLE',
        typeOfCreator: 'driver',
    })
    const [capacity, setCapacity] = useState(newRide.capacity);
    const [price, setPrice] = useState(newRide.price);
    const clickHandler = () => {
        // rideService.createRide(
        //     {
        //         direction: newRide.direction,
        //         date: modifyDate(today),
        //         description: newRide.description,
        //         price: newRide.price,
        //         driverId: 1,
        //         capacity: newRide.capacity,
        //         currentNumberOfPassengers: 1,
        //         status: 'AVAILABLE'
        //     }
        // ).then(res => console.log(res));
        // console.log(newRide);
        rideService.createRide(
            {
                direction: 'RUS',
                date: '2023-02-12',
                description: 'RRR',
                price: 10,
                driverId: 99,
                capacity: 1,
                currentNumberOfPassengers: 0,
                status: 'AVAILABLE'
            }
        ).then(res => console.log(res));
    }

    const changeHandler = event => {
        setNewRide(newRide, newRide[event.target.name] = event.target.value)
        console.log(newRide);
    }

    const getCount = (count) => {
        setCapacity(count);
        setNewRide(newRide, newRide['capacity'] = count)
    }
    const getPrice = (count) => {
        setPrice(count);
        setNewRide(newRide, newRide['price'] = count)
    }

    return (
        <div className='createPage'>

            <h1>Создать поездку/ Найти попутку</h1>
            <Label options={[{ value: 'RUS', title: 'В Россию' }, { value: 'FIN', title: 'В Финляндию' }]}
                default={newRide.direction}
                name='direction'
                changeHandler={changeHandler} />
            <Label options={[{ value: 'driver', title: 'Я водитель' }, { value: 'passenger', title: 'Я попутчик' }]}
                default={newRide.typeOfCreator}
                name='typeOfCreator'
                changeHandler={changeHandler} />


            <label htmlFor='when' >
                <span>Когда: </span>
                <input id='when'
                    type='date'
                    name='when'
                    onChange={changeHandler}
                    defaultValue={newRide.when} />
            </label>
            <div className='content-inline-apart'>
            <div className='d-flex d-left'>
            <p>Количество мест:</p>
            <Counter getCount={getCount}
                count={capacity} min='1' max='8' step='1' />
            </div>
            <div className='d-flex d-right'>
            <p>Стоимость:</p>
            <Counter getCount={getPrice}
                count={price} min='10' max='100' step='10' />
            </div>
            </div>
            <textarea name='description' onChange={changeHandler}>

            </textarea>

            <button onClick={clickHandler}>Сохранить и консолить</button>
            {/* <button onClick={clickHandler} >Создать Default</button> */}
        </div>

    );
}

export default CreatePage;
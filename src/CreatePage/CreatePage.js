import React, { useEffect, useState } from 'react';
import { RideService } from '../services/RideService';
import modifyDate from '../services/modifyDate';
import { useDispatch, useSelector } from 'react-redux'
import Label from '../Filters/Label/Label';
import Counter from '../Filters/Counter/Counter';
import DatePicker from '../Filters/DatePicker/DatePicker';
import Spinner from '../Spinner/Spinner'
import { useNavigate } from 'react-router-dom';

const rideService = new RideService();
let today = new Date();

function CreatePage() {
    const navigate = useNavigate();
    
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(false);
    const [newRide, setNewRide] = useState({
        direction: 'FIN',
        date: modifyDate(today),
        description: '',
        price: 10,
        capacity: '3',
        status: 'AVAILABLE',
        typeOfCreator: 'driver',
    })
    const [capacity, setCapacity] = useState(newRide.capacity);
    const [price, setPrice] = useState(newRide.price);

    useEffect(() => {
        if (result) setTimeout(() => navigate('/myrides'), 100000)
    }, [result])
    
    const clickHandler = () => {
        rideService.createRide(
            {
                direction: newRide.direction,
                date: modifyDate(today),
                description: newRide.description,
                price: newRide.price,
                driver :{
                    tgUsername: JSON.parse(localStorage.getItem('user')).username
                },
                capacity: newRide.capacity,
                currentNumberOfPassengers: 0,
                status: 'AVAILABLE'
            }
        ).then(res => console.log(res));
        // console.log(newRide);
        // rideService.createRide(
        //     {
        //         direction: 'RUS',
        //         date: '2023-02-12',
        //         description: 'RRR',
        //         price: 10,
        //         driverId: 1,
        //         capacity: 1,
        //         currentNumberOfPassengers: 0,
        //         status: 'AVAILABLE'
        //     }
        // ).then(res => console.log(res));
    }

    const changeHandler = event => {
        setNewRide(newRide, newRide[event.target.name] = event.target.value)
    }

    const getCount = (count) => {
        setCapacity(count);
        setNewRide(newRide, newRide['capacity'] = count)
    }
    const getPrice = (count) => {
        setPrice(count);
        setNewRide(newRide, newRide['price'] = count)
    }

    if (isLoading) {
        return (
            <div className='notification'>
                <Spinner />
            </div>
        )
    } else if (result) {
        return (
            <div className='notification'>
                <p className='success'>Поездка успешно создана!</p>
            </div>
        )
    } else {
        return (
            <div className='createPage'>
    
                <h1>Создать поездку</h1>
                    <p>Направление:</p>
                    <Label options={[{ value: 'RUS', title: 'В Россию' }, { value: 'FIN', title: 'В Финляндию' }]}
                        default={newRide.direction}
                        name='direction'
                        changeHandler={changeHandler} />
                <p className='title'>Выберите дату:</p>
                <DatePicker changeHandler={changeHandler} />
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
    
                <button onClick={clickHandler}>Создать поездку</button>
            </div>
    
        );
    }

}

export default CreatePage;
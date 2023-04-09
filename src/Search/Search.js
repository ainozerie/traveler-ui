import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RideService } from '../services/RideService';
import { modifyDate } from '../services/modifyDate';
import { updateFilters, updateFilterDate } from '../store/session/session';
import DatePicker from '../Filters/DatePicker/DatePicker';
import Label from '../Filters/Label/Label';
import Counter from '../Filters/Counter/Counter';
import Ride from '../Ride/Ride';

const rideService = new RideService();

function Search() {
    const searchFilters = useSelector(state => state.session.searchFilters);
    const dispatch = useDispatch();

    const [rides, setRides] = useState([]);
    const ride = {
        id: 153,
        direction: 'FIN',
        description: 'Здравствуйте Еду из Хельсинки в Петрозаводск Беру попутчиков 70€ с человека Также беру посылки 30€ Выезжаем в 19:30 от жд вокзала Хельсинки',
        date: '2023-02-01',
        price: 10,
        driverId: '@AndreyCergeevih',
        capacity: 3,
        currentNumberOfPassengers: 0,
        status: 'AVAILABLE'
    }
    console.log(searchFilters);

    console.log(rideService.fetchAllRides().data)

    const getCount = (count) => {
        dispatch(updateFilters({ 'capacity': count }));
    }
    //updating direction and capacity filters, also date
    const filterHandler = event => {
        dispatch(updateFilters({ [event.target.name]: event.target.value }));
        submitHandler();
    }

    const submitHandler = () => {
        rideService.fetchRides(searchFilters.direction, searchFilters.date, searchFilters.date)
            .then((res) => console.log(res.data))
    }

    return (
        <div className='searchPage'>
            <h1>Поиск поездок</h1>
            <p className='title'>Направление:</p>
            <Label options={[{ value: 'Rus', title: 'В Россию' }, { value: 'Fin', title: 'В Финляндию' }]}
                default={searchFilters.direction}
                name='direction'
                changeHandler={filterHandler} />

            <p className='title'>Выберите дату:</p>
            <DatePicker changeHandler={filterHandler} />
            <p>Количество мест:</p>
            <div className='content-inline-apart'>
            <Counter getCount={getCount}
                count={searchFilters.capacity} min='1' max='8' step='1'/>
            <p className='help-text'>Найдено: 10</p>
            </div>
            <Ride price={ride.price} description={ride.description} driverId={ride.driverId} />
            <Ride price={ride.price} description={ride.description} driverId={ride.driverId} />
            <Ride price={ride.price} description={ride.description} driverId={ride.driverId} />
            <Ride price={ride.price} description={ride.description} driverId={ride.driverId} />
            <Ride price={ride.price} description={ride.description} driverId={ride.driverId} />
            <Ride price={ride.price} description={ride.description} driverId={ride.driverId} />
        </div>
    );
}

export default Search;
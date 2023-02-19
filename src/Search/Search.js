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

    useEffect(() => {
        rideService.fetchAllRides().then(res => {
            setRides(res.data);
        });
    }, [])


    const ridesToDisplay = rides.map(ride => {
        return <Ride key={ride.driver.tgUsername + Date.now() }  ride={ride} />
    })


    const getCount = (count) => {
        dispatch(updateFilters({ 'capacity': count }));
    }
    const filterHandler = event => {
        dispatch(updateFilters({ [event.target.name]: event.target.value }));
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
            {rides.length > 0  && ridesToDisplay}
        </div> 
    );
}

export default Search;
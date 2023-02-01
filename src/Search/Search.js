import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RideService } from '../services/RideService';
import { modifyDate } from '../services/modifyDate';
import { updateFilters, updateFilterDate } from '../store/session/session';
import DatePicker from '../Filters/DatePicker/DatePicker';
import Label from '../Filters/Label/Label';
import Counter from '../Filters/Counter/Counter';

const rideService = new RideService();

function Search() {
    const searchFilters = useSelector(state => state.session.searchFilters);
    const dispatch = useDispatch();

    const [rides, setRides] = useState([]);
    console.log(searchFilters);

    const getCount = (count) => {
        dispatch(updateFilters({ 'capacity': count }));
    }
    //updating direction and capacity filters, also date
    const filterHandler = event => {
        dispatch(updateFilters({ [event.target.name]: event.target.value }));
    }

    const submitHandler = () => {
        rideService.fetchRides(searchFilters.direction, searchFilters.date, searchFilters.date)
            .then((res) => console.log(res))
    }

    return (
        <div className='searchPage'>
            <h1>Поиск</h1>

            <p className='title'>Направление:</p>
            <Label options={[{ value: 'Rus', title: 'В Россию' }, { value: 'Fin', title: 'В Финляндию' }]}
                default={searchFilters.direction}
                name='direction'
                changeHandler={filterHandler} />

            <p className='title'>Выберите дату:</p>
            <DatePicker changeHandler={filterHandler} />
            <p>Количество мест:</p>

            <Counter getCount={getCount}
                count={searchFilters.capacity} min='1' max='8' step='1'/>
            <button onClick={submitHandler}>Найти</button>
        </div>
    );
}

export default Search;
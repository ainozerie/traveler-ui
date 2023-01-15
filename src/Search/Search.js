import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RideService } from '../services/RideService';
import { modifyDate } from '../services/modifyDate';
import { updateFilters, updateFilterDate } from '../store/session/session';

const rideService = new RideService();

function Search() {
    const searchFilters = useSelector(state => state.session.searchFilters);
    const dispatch = useDispatch();
    
    const [rides, setRides] = useState([]);
    

    let today = new Date();

    //updating direction and capacity filters, also date
    const filterHandler = event => {
        dispatch(updateFilters({[event.target.name]: event.target.value}));
    }

    const dateHandler = event => {
        let date = modifyDate(new Date(event.target.value));
        dispatch(updateFilterDate(date));
    }

    // checking inputs
    const isValid = () => {
        return searchFilters.Date != '' && searchFilters.direction != '' && searchFilters.capacity != '';
    }

    const submitHandler = () => {
        if (isValid()) {
            rideService.fetchRides(searchFilters.direction, searchFilters.date, searchFilters.date)
                .then((res) => setRides(res))
        }

    }

    return (
        <div className='search'>
            <h1>Поиск</h1>
            <div>
                <p>Направление:</p>
                <select name='direction' 
                        defaultValue={searchFilters.direction}
                        onChange={filterHandler}
                        >
                    <option value='Fin'>в Финляндию</option>
                    <option value='Rus'>в Россию</option>
                </select>
            </div>
            <div>
                <p>Когда:</p>
                <input  name='date'
                        type='date'
                        defaultValue={searchFilters.date}
                        min={modifyDate(today)}
                        onChange={dateHandler} 
                        />
            </div>
            <div>
                <p>Количество мест:</p>
                <input  name='capacity' 
                        type='number' 
                        defaultValue={searchFilters.capacity} 
                        onChange={filterHandler}
                        min='1' 
                        max='7' 
                        />
            </div>
            <button onClick={submitHandler}>Найти</button>
        </div>
    );
}

export default Search;
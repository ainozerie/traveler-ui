import React, { useState, useEffect } from 'react';
import Button from './Button';
import Filter from './Filter';
import Results from './Results';
import './Search.css';
import { RideService } from '../services/RideService';
import { useDispatch } from 'react-redux'
import { setTrue, setFalse } from '../store/features/oneSlice'




function Search() {

    const rideService = new RideService();
    const dispatch = useDispatch();

    let today = new Date();
    let todayFormatted = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const [filters, setFilters] = useState({
        direction: '',
        afterDate: todayFormatted,
        beforeDate: todayFormatted
    });

    // mock
    const directions = [
        { value: 'RUS', name: 'to Russia' },
        { value: 'FIN', name: 'to Finlandia' }
    ];
    const updateFilters = event => {
        setFilters(filters => ({
            ...filters,
            [event.target.name]: event.target.value
        }))
    }
    function searchHandler() {
        if (filters.direction != '') {
            rideService.fetchRides(filters.direction, filters.afterDate, filters.beforeDate).then( data => {
                console.log(data);
            })
        }
        
    }

    return (
        <>
            
            <div className='row'>
                <Filter onchange={updateFilters}  options={directions} id='Direction' name='Direction' default={filters.to}/>
            </div>
            <div className='row'>
                <label>When</label>
                <input onChange={updateFilters} name='afterDate' type='date' min={todayFormatted} defaultValue={filters.afterDate}/> - 
                <input onChange={updateFilters} name='beforeDate' type='date' min={filters.afterDate} defaultValue={filters.beforeDate}/>
            </div>
            <Button name='Search' class='submit' click={searchHandler}/>
            <Results />
        </>
    );
}

export default Search;
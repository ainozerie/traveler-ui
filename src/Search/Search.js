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
    console.log(searchFilters);
    useEffect(() => {
        submitHandler();
      }, [])


    console.log(rideService.fetchAllRides().data)

    const getCount = (count) => {
        dispatch(updateFilters({ 'capacity': count }));
    }
    //updating direction and capacity filters, also date
    const filterHandler = event => {
        dispatch(updateFilters({ [event.target.name]: event.target.value }))
    }

    const submitHandler = () => {
        rideService.fetchRides(searchFilters.direction, searchFilters.date, new Date(new Date(searchFilters.date).getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0,10))
            .then((res) => {
                console.log('hei');

                console.log(res);
                setRides(res)
            }
            )
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
            <DatePicker onClick={submitHandler} changeHandler={filterHandler} />
            <p>Количество мест:</p>
            <div className='content-inline-apart'>
            <Counter onClick={submitHandler} getCount={getCount}
                count={searchFilters.capacity} min='1' max='8' step='1'/>
            <p className='help-text'>Найдено: 10</p>
            </div>
            
            <div>
            {rides ? (  
                rides.map(ride => (
                    <Ride price={ride.price} description={ride.description} driverId={ride.driverId} />
                ))
            ) :(
                <p>Loading data...</p>
            )}
            </div>

        </div>
    );
}

export default Search;
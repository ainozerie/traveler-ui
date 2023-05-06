import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RideService } from '../services/RideService';
import { modifyDate } from '../services/modifyDate';
import { updateFilters, updateFilterDate } from '../store/session/session';
import DatePicker from '../Filters/DatePicker/DatePicker';
import Label from '../Filters/Label/Label';
import Counter from '../Filters/Counter/Counter';
import Ride from '../Ride/Ride';
import './Search.css'

const rideService = new RideService();

function Search() {
    const searchFilters = useSelector(state => state.session.searchFilters);
    const dispatch = useDispatch();
    const [rides, setRides] = useState([]);
    // console.log(searchFilters);

    useEffect(() => {
        submitHandler();
      }, [])
    
      useEffect(() => {
        submitHandler();
      }, [searchFilters]);


    // console.log(rideService.fetchAllRides().data)

    const getCount = (count) => {
        dispatch(updateFilters({ 'capacity': count }));
    }
    const filterHandler = event => {
        dispatch(updateFilters({ [event.target.name]: event.target.value }))
    }

    const submitHandler = () => {
        rideService.fetchRides(searchFilters.direction, searchFilters.date, new Date(new Date(searchFilters.date).getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0,10))
            .then((res) => {
                res = res.filter(ride => (ride.capacity - ride.currentNumberOfPassengers) >= searchFilters.capacity);
                console.log(res)
                setRides(res)
            });
    }

    return (
        <div className='searchPage'>
            <h1>Поиск поездок</h1>

            <p className='title'>Направление:</p>
            <Label  options={[{ value: 'Rus', title: 'В Россию' }, { value: 'Fin', title: 'В Финляндию' }]}
                    default={searchFilters.direction}
                    name='direction'
                    changeHandler={filterHandler} />

            <p className='title'>Выберите дату:</p>
            <DatePicker changeHandler={filterHandler} />

            <p>Количество мест:</p>
            <div className='content-inline-apart'>
            <Counter getCount={getCount}
                count={searchFilters.capacity} min='1' max='8' step='1'/>
                
            <p className='help-text'>Найдено: {rides.length}</p>
            </div>
            
            <div className='rides'>
            {rides ? (  
                rides.map(ride => (
                    <Ride   key={ride.driver.id} 
                            price={ride.price} 
                            description={ride.description} 
                            driverId={ride.driver} 
                            numberOfPlacesAvailable={ride.capacity - ride.currentNumberOfPassengers} 
                            username={ride.driver.tgUsername} 
                            firstname={ride.driver.firstname}
                            surname={ride.driver.surname} />
                ))
            ) :(
                <p className='noRides'>Loading data...</p>
            )}
            {rides.length === 0 && <p className='noRides'>По указанным Вами параметрам поездок не найдено.</p>}
            </div>

        </div>
    );
}

export default Search;
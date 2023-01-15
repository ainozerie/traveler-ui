import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilters, updateFilterDate } from '../store/session/session';

const modifyDate = (date) => {
    return date.toISOString().split('T')[0]
}

function Search() {
    const searchFilters = useSelector(state => state.session.searchFilters);
    const dispatch = useDispatch();

    let today = new Date();

    const filterHandler = event => {
        
        dispatch(updateFilters({[event.target.name]: event.target.value}));
    }
    const dateHandler = event => {
        let date = modifyDate(new Date(event.target.value));
        dispatch(updateFilterDate(date));
    }

    const clickHandler = () => {
        if (searchFilters.Date != '' && searchFilters.direction != '' && searchFilters.capacity != '') {
            console.log(searchFilters);
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
            <button onClick={clickHandler}>Найти</button>
        </div>
    );
}

export default Search;
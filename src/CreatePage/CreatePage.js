import React, { useState } from 'react';
import { RideService } from '../services/RideService';
import modifyDate from '../services/modifyDate';
import { useDispatch, useSelector } from 'react-redux'

const rideService = new RideService();
let date = new Date();
console.log(modifyDate(date));

function CreatePage() {
    const [newRide, setNewRide] = useState({
        typeOfCreator: 'driver',
        direction: 'FIN',
        when: modifyDate(date),
        capacity: 3,
        description: '',
        price: 10
    })
    const clickHandler = () => {
        rideService.createRide(
            {
                direction: newRide.direction,
                date: new Date(newRide.when).toISOString().split('.')[0].replace('T', '-').replaceAll(':', '-'),
                description: newRide.description,
                price: newRide.price,
                driverId: 1,
                capacity: newRide.capacity,
                currentNumberOfPassengers: 0,
                status: 'AVAILABLE'
            }
        ).then(res => console.log(res));
        // console.log(newRide);
    }

    const changeHandler = event => {
        setNewRide(newRide, newRide[event.target.name] = event.target.value)
    }

    return (
        <>
            <div className='createPage'>

                <h1>Создать поездку/ Найти попутку</h1>
                
                <div className='row radioContainer'>
                    <label htmlFor='driver'>
                        <input  id='driver' 
                                value='driver' 
                                type="radio" 
                                name='typeOfCreator' 
                                onChange={changeHandler} 
                                defaultChecked={newRide.typeOfCreator == 'driver'} />
                        <span>Я водитель</span>
                    </label>
                    <label htmlFor='passenger'>
                        <input  id='passenger' 
                                value='passenger'  
                                type="radio" 
                                name='typeOfCreator' 
                                onChange={changeHandler} 
                                defaultChecked={newRide.typeOfCreator == 'passenger'} />
                        <span>Я попутчик</span>
                    </label>
                </div>

                <div className='row radioContainer'>
                    <label htmlFor='FIN'>
                        <input  id='FIN'
                                value='FIN' 
                                type="radio" 
                                name='direction' 
                                onChange={changeHandler} 
                                defaultChecked={newRide.direction == 'FIN'} />
                        <span>в Финляндию</span>
                    </label>

                    <label htmlFor='RUS'>
                        <input  id='RUS' 
                                value='RUS' 
                                type="radio" 
                                name='direction' 
                                onChange={changeHandler} 
                                defaultChecked={newRide.direction == 'RUS'}/>
                        <span>в Россию</span>
                    </label>
                </div>

                <label htmlFor='when' >
                    <span>Когда: </span>
                    <input  id='when'
                            type='date' 
                            name='when' 
                            onChange={changeHandler} 
                            defaultValue={newRide.when} />
                </label>

                <label htmlFor='capacity' >
                    <span>Количество мест: </span>
                    <input  id='capacity' 
                            type='number' 
                            name='capacity' 
                            onChange={changeHandler} 
                            defaultValue={newRide.capacity} 
                            min='1' 
                            max='7' />
                </label>

                <label htmlFor='price' >
                    <span>Цена: </span>
                    <input  id='price' 
                            type='number' 
                            name='price' 
                            onChange={changeHandler} 
                            defaultValue={newRide.price} 
                            min='10' 
                            max='100' />
                </label>

                <textarea name='description' onChange={changeHandler}>

                </textarea>

                <button onClick={clickHandler}>Сохранить и консолить</button>
                {/* <button onClick={clickHandler} >Создать Default</button> */}
            </div>
        </>
    );
}

export default CreatePage;
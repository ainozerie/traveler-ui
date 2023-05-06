import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RideService } from '../services/RideService';
import Ride from '../Ride/Ride';

const rideService = new RideService();


function MyRides() {
    const navigate = useNavigate();

    const [myRides, setMyRides] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')));
        } else {
            navigate('/auth');
        }
    }, []);

    const displayMyRides = () => {
        // if (myRides !== undefined) {
        //     return myRides.map(ride => {
        //         return <Ride price={ride.price} description={ride.description} driverId={ride.driverId} numberOfPlacesAvailable={ride.capacity - ride.currentNumberOfPassengers} />
        //     });
        // } else {
        //     return <p>У вас еще нет поездок...</p>
        // }
        return (
        <div>
            {myRides ? (  
                myRides.filter(ride => ride.driver.tgUsername === JSON.parse(localStorage.getItem('user')).username).map(ride => (
                    <Ride price={ride.price} description={ride.description} driverId={ride.driverId} numberOfPlacesAvailable={ride.capacity - ride.currentNumberOfPassengers} username={ride.driver.tgUsername}/>
                ))
            ) :(
                <p>У вас еще нет поездок...</p>
            )}
            
        </div>
        )
    }

    useEffect(() => {
        rideService.fetchAllRides().then((res) =>{
            setMyRides(res.data);
        });
      }, [])

    // setTimeout(() => {
    //     setMyRides(rideService.fetchRides().data);
    // }, 400);

    return (
        <div className='myRides'>
            <h1>Мои поездки</h1>
            <Link to={'/create'}>
                <button>Создать новую</button>
            </Link>
            <div>
                {displayMyRides()}
            </div>
        </div>
    );
}

export default MyRides;
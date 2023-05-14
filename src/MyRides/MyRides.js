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
    
    useEffect(() => {
        // if user exist
        if (true) {
            rideService.fetchAllRides().then((res) => {
                let myRides = res.data.filter(ride => ride.driver.tgUsername === user.username);
                setMyRides(myRides);
            });
        }
      }, [user])

    const displayMyRides = myRides.map(ride => {
        return <Ride    key={ride.description}
                        price={ride.price} 
                        description={ride.description} 
                        driverId={ride.driverId} 
                        numberOfPlacesAvailable={ride.capacity - ride.currentNumberOfPassengers} 
                        firstname={ride.driver.firstname}
                        surname={ride.driver.surname}
                        photo={ride.driver.photoUrl} />
    })


    return (
        <div className='myRides'>
            <h1>Мои поездки</h1>
            <Link to={'/create'}>
                <button>Создать новую</button>
            </Link>
            <div>
                {displayMyRides}
            </div>
        </div>
    );
}

export default MyRides;
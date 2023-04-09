import { useState } from "react";
import Counter from "../Filters/Counter/Counter";
import Notification from './Notification';


function Playground() {
    localStorage.removeItem('user');
    const [capacity, setCapacity] = useState(4);

    const getCount = (count) => {
        setCapacity(count)
    }

    const [rideCreated, setRideCreated] = useState(false);

    const handleCreateRide = () => {
      // Code to create ride goes here
  
      setRideCreated(true);
  
      setTimeout(() => {
        setRideCreated(false);
      }, 3000);
    };


    return (
        <>
            <p>Playground</p>
            <Counter getCount={getCount}
                count={capacity} min='1' max='8'  />
                 <button onClick={handleCreateRide}>Create Ride</button>

            {rideCreated && <Notification message="Ride Created" />}
        </>
    );
}

export default Playground;
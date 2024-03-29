import { useState } from "react";
import Counter from "../Filters/Counter/Counter";


function Playground() {
    localStorage.removeItem('user');
    const [capacity, setCapacity] = useState(4);

    const getCount = (count) => {
        setCapacity(count)
    }
    
    const [rideCreated, setRideCreated] = useState(false);

    const handleCreateRide = () => {
        // Code to create ride goes here
        console.log('play!')
        setRideCreated(true);
  
        setTimeout(() => {
            setRideCreated(false);
        }, 3000);
    };

    const handleIphone = () => {};

    return (
        <>
            <p>Playground</p>
            <Counter getCount={getCount}
                count={capacity} min='1' max='8'  />
                 <button onClick={handleCreateRide}>Create Ride</button>
                 <button onClick={handleIphone}>For iPhone add icon to homescreen</button>

            {/* {rideCreated && <Notification message="Ride Created" />} */}
        </>
    );
}

export default Playground;
import { useState } from "react";
import Counter from "../Filters/Counter/Counter";


function Playground() {
    localStorage.removeItem('user');
    const [capacity, setCapacity] = useState(4);

    const getCount = (count) => {
        setCapacity(count)
    }
    // hi, Borya!

    function handleAddToHomeScreenClick() {
      // alert(window.navigator.addToHomeScreen);
      // if (window.navigator && window.navigator.addToHomeScreen) {
        window.navigator.addToHomeScreen();
      // }
    }

    return (
        <>
            <p>Playground</p>
            <button onClick={handleAddToHomeScreenClick}>Handle phone app</button>
            <Counter getCount={getCount}
                count={capacity} min='1' max='8'  />
                 <button onClick={handleCreateRide}>Create Ride</button>
                 <button onClick={handleIphone}>For iPhone add icon to homescreen</button>

            {/* {rideCreated && <Notification message="Ride Created" />} */}
        </>
    );
}

export default Playground;
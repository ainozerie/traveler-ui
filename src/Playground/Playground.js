import { useState } from "react";
import Counter from "../Filters/Counter/Counter";
import addToHomescreen from "add-to-homescreen";
import AddToHomeScreen from '@ideasio/add-to-homescreen-react';


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

    const handleIphone = () => {
      alert(navigator.userAgent.match(/iPhone/i) && !navigator.standalone)
        // Проверяем, работает ли браузер на iOS и не находится ли приложение уже на главном экране
        if (navigator.userAgent.match(/iPhone/i) && !navigator.standalone) {
          var addToHomeConfig = {
            autostart: false,
            message: 'Добавить на главный экран?',
            touchIcon: 'https://png.pngtree.com/element_our/20190530/ourmid/pngtree-correct-icon-image_1267804.jpg',
            arrow: true,
            lifespan: 0
          };
          var addToHome = addToHomescreen(addToHomeConfig);
          addToHome.show();
        
        }
        
      };

    return (
        <>
            <p>Playground</p>
            <AddToHomeScreen />
            <Counter getCount={getCount}
                count={capacity} min='1' max='8'  />
                 <button onClick={handleCreateRide}>Create Ride</button>
                 <button onClick={handleIphone}>For iPhone add icon to homescreen</button>

            {/* {rideCreated && <Notification message="Ride Created" />} */}
        </>
    );
}

export default Playground;
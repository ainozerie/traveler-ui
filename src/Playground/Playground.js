import { useState } from "react";
import Counter from "../Filters/Counter/Counter";
import addToHomescreen from "add-to-homescreen";


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
        // Проверяем, работает ли браузер на iOS и не находится ли приложение уже на главном экране
        if (navigator.userAgent.match(/iPhone/i) && !navigator.standalone) {
          // Отображаем всплывающее окно с инструкцией для добавления сайта на главный экран
          var addToHomeScreen = confirm("Добавить на главный экран?");
          if (addToHomeScreen) {
            // Добавляем сайт на главный экран
            var iconURL = "https://cdn.iconscout.com/icon/premium/png-256-thumb/traveler-1539794-1306812.png";
            var appName = "Traveler";
             window.navigator.standalone = true; // Запускаем сайт в standalone-режиме
            var addToHomeConfig = {appName: appName, rel: "apple-touch-icon", href: iconURL};
            var addToHome = new addToHomescreen(addToHomeConfig);
            addToHome.show();
          }
        }
        
      };

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
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
  
      setRideCreated(true);
  
      setTimeout(() => {
        setRideCreated(false);
      }, 3000);
    };

    const handleIphone = () => {
        if (navigator.userAgent.match(/iPhone/i)) {
            // Код, который выполняется, если сайт открыт на iPhone
            // проверяем, поддерживает ли устройство добавление на домашний экран
                if ("standalone" in window.navigator && window.navigator.standalone) {
                    // создаем элемент ссылки
                    var link = document.createElement("a");
                    link.setAttribute("href", "https://traveler-ui-test.vercel.app/");
                    link.setAttribute("rel", "apple-touch-icon");
                    link.setAttribute("type", "image/png");
                    link.setAttribute("sizes", "192x192");
                    // добавляем элемент в head
                    document.head.appendChild(link);
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
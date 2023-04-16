import { useState } from "react";
import Counter from "../Filters/Counter/Counter";

function Playground() {
    localStorage.removeItem('user');
    const [capacity, setCapacity] = useState(4);

    const getCount = (count) => {
        setCapacity(count)
    }
    // hi, Borya!

    const handleIphone = () => {
      // Проверяем, поддерживает ли браузер Web App Manifest API
  if ('standalone' in window.navigator && window.navigator.standalone) {
  // Браузер уже добавил приложение на рабочий стол
  } else if (window.matchMedia('(display-mode: standalone)').matches) {
  // Приложение уже открыто в полноэкранном режиме
  } else {
  // Создаем кнопку "Добавить на рабочий стол"
  // var addToHomeScreenButton = document.createElement('button');
  // addToHomeScreenButton.innerText = 'Добавить на рабочий стол';
  // addToHomeScreenButton.addEventListener('click', function() {
    // Добавляем метку приложения на рабочий стол
    window.navigator.standalone = true;
    var link = document.createElement('link');
    link.setAttribute('rel', 'manifest');
    link.setAttribute('href', '/manifest.json');
    document.head.appendChild(link);
  // });
  // document.body.appendChild(addToHomeScreenButton);
  }

};



    return (
        <>
            <p>Playground</p>
            <button onClick={handleIphone}>Handle phone app</button>
            <Counter getCount={getCount}
                count={capacity} min='1' max='8'  />
        </>
    );
}

export default Playground;
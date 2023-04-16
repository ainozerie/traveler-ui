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
      alert(window.navigator && window.navigator.addWebAppBanner);
      if (window.navigator && window.navigator.addWebAppBanner) {
        window.navigator.addWebAppBanner();
      }
    }
  



    return (
        <>
            <p>Playground</p>
            <button onClick={handleAddToHomeScreenClick}>Handle phone app</button>
            <Counter getCount={getCount}
                count={capacity} min='1' max='8'  />
        </>
    );
}

export default Playground;
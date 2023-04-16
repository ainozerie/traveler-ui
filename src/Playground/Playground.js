import { useState } from "react";
import Counter from "../Filters/Counter/Counter";

function Playground() {
    localStorage.removeItem('user');
    const [capacity, setCapacity] = useState(4);

    const getCount = (count) => {
        setCapacity(count)
    }
    // hi, Borya and Me
    return (
        <>
            <p>Playground</p>
            <Counter getCount={getCount}
                count={capacity} min='1' max='8'  />
        </>
    );
}

export default Playground;
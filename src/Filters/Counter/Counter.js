import React from 'react';
import './Counter.css';

function Counter({getCount, count, min, max, step}) {
    const clickHandler = (event) => {
        if (Number(count) + Number(event.target.id) == Number(min) - 1 * step) {
            getCount(min);
        } else if (Number(count) + Number(event.target.id) == Number(max) + 1 * step) {
            getCount(max);
        } else {
            getCount((Number(count) + Number(event.target.id)).toString());
        }
    }

    return (
        <div className='counter'>
        <div className='row'>
            
            <span   id={-step} 
                    className='counter-button'
                    onClick={clickHandler}>-</span>
            <label>
                <span className='counter-screen' >{count}</span>
            </label>
            <span   id={step} 
                    className='counter-button'
                    onClick={clickHandler}>+</span>
        </div>
        </div>
    );
}

export default Counter;
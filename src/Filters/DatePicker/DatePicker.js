import React from 'react';
import './DatePicker.css'
import modifyDate from '../../services/modifyDate';

function DatePicker(props) {
    let start = new Date();
    let dt = new Date(start);
    let end = new Date(start);
    end.setDate(start.getDate() + 30)
    let datesArray = [];

    while (dt < end) {
        datesArray.push(modifyDate(new Date(dt)));
        dt.setDate(dt.getDate() + 1);
    }

    let datesToDisplay = datesArray.map(item => {
        return (<label htmlFor={item} key={item}><input 
            id={item}
            value={item}
            type="radio"
            name='date'
            onChange={props.changeHandler}
            defaultChecked={datesArray[0] == item} />
            <span className='date-to-be-picked'>{item.slice(-5).replace('-', '.').slice(3)}.{item.slice(-5).replace('-', '.').slice(0, 2)}</span>
        </label>
        )
    })

    return (
        <div className='date-picker'>
            {datesToDisplay}
        </div>
    );
}

export default DatePicker;
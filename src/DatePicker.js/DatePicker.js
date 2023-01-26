import React from 'react';
import modifyDate from '../services/modifyDate';

function DatePicker() {
    let today = new Date();
    let allDates = [];

    let index = 0;
    while (index < 30) {
        let day = new Date();
        let current = day.setDate(day.getDate() + index);
        console.log(current);
        current = modifyDate(current);
        allDates.push(current);
    }

    let datesToDisplay = allDates.map(date => {
        return <p key={date}>{date}</p>
    })

    return (
        <div className='datePicker'>
            {today}
        </div>
    );
}

export default DatePicker;
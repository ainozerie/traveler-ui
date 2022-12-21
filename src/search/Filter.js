import React from 'react';
import '../App.css';

function Filter(props) {

    const options = props.options.map(({ value, name }) => {
        return <option key={value} value={value}>{name}</option>
    })
    return <div className='filter'>
        <label htmlFor={props.name}>{props.name} </label>
        <select id={props.id} name={props.name.toLowerCase()} onChange={props.onchange}>
            <option selected disabled hidden>where</option>
            {options}
        </select>
    </div>
}

export default Filter;
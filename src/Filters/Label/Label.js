import React from 'react';
import './Label.css'

function Label(props) {

    // options is array with strings, name, default
    let labelsToDisplay = props.options.map(item => {
        return (
            <label key={item.value} htmlFor={item.value}>
                <input id={item.value}
                    value={item.value}
                    type="radio"
                    name={props.name}
                    defaultChecked={props.default == item.value}
                    onChange={props.changeHandler}/>
                <span className='direction-to-be-picked '>{item.title}</span>
            </label>
        )
    })

    return (
        <div className='row'>
            {labelsToDisplay}
        </div>
    );
}

export default Label;
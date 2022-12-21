import React from 'react';
import '../App.css';

function Button(props) {
    return <button className={props.class} onClick={props.click}>{props.name}</button>
}

export default Button;
import React from "react"

import '../App.css';

function Title(props) {
    return <h1 className='title'><span>{props.name}</span></h1>
}

export default Title;
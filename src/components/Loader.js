import React from 'react';
import '../App.css';

function Loader(props) {
    if (props.isLoading) return <div class="loader-line"></div>;
}

export default Loader;


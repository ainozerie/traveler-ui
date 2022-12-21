import React, { useRef, useEffect, useCallback } from "react";
import Search from '../search/Search';
import Title from '../search/Title';
import './Main.css';
import { useDetectScroll } from "@smakss/react-scroll-direction";



function Main() {

    const height = window.innerHeight - 80;

    return (
        <main style={{height: height}}  className='intro'>

            <Search />
        </main>

    );
}

export default Main;
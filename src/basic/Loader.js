import React, { Component } from 'react';
import './Loader.css';
import { useSelector, useDispatch } from 'react-redux'
import { setFalse, setTrue } from '../store/isLoadingSlice'


function Loader() {
    const isLoading = useSelector((state) => state.isLoading.value);
    const dispatch = useDispatch(); 
    // () => dispatch(setFalse())

    if (isLoading) {
        return <div class="loader-line"></div>
    } else {
        return <div class="empty-line"></div>
    }
}
  
export default Loader;
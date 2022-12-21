import './App.css';
import Loader from './components/Loader';
import React from 'react'
import Navigation from './navigation/Navigation';
import Main from './main/Main';
import Title from './search/Title';
import { useSelector } from 'react-redux'


function App() {
  const isLoading = useSelector(state => state.isLoading.value)

  return (
    <>

      <Title name='Search rides' />
      <Loader isLoading={isLoading}/>
      <Main />
      <Navigation />
    </>
  );
}

export default App;

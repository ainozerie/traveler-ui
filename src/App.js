import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleIsLoading, changeUser } from './store/features/session';


function App() {
  const isLoading = useSelector(state => state.session.isLoading)
  const user = useSelector(state => state.session.user)

  const dispatch = useDispatch();

  const clicker = () => {
    dispatch(toggleIsLoading())
    console.log(isLoading);
  }
  const setUser = () => {
    dispatch(changeUser('Valera'))
    console.log('user is ', user);
  }
  return (
    <>
    <p>Привет, попутчик!</p>
    <button onClick={clicker}>toggle loader</button>
    <button onClick={setUser}>set user</button>
    
    </>
  );
}

export default App;

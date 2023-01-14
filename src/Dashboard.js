import React from 'react'
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation'

function Dashboard() {

  return (
    <>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </>
  );
}

export default Dashboard;

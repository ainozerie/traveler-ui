import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation'
import { redirect } from "react-router-dom";

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

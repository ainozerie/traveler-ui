import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/store'
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'
import { routes } from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = routes;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
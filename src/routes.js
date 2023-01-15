import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './Dashboard';
import Auth from './Auth/Auth'
import CreatePage from './CreatePage/CreatePage';
import Playground from './Playground/Playground';
import ErrorPage from './ErrorPage/ErrorPage';
import Search from './Search/Search';
import Profile from './Profile/Profile';
import MyRides from './MyRides/MyRides';

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
      children: [
        { 
          index: true,
          element: <Search /> 
        },
        {
          path: "/create",
          element: <CreatePage />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/myrides",
          element: <MyRides />,
        },
        {
          path: "/playground",
          element: <Playground />,
        },
      ],
    },
    {
      path: "/auth",
      element: <Auth />,
    },
  ]);

export default routes;
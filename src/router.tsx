import {createBrowserRouter} from 'react-router-dom';
import ErrorPage from '@pages/error';
import App from './App.tsx';
import Dashboard from '@pages/dashboard';
import Calls from '@pages/calls';
import User from '@pages/user';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Dashboard />,
            },
            {
                path: '/calls',
                element: <Calls />,
            },
            {
                path: '/info',
                element: <Dashboard />,
            },
            {
                path: '/user/:userId',
                element: <User />,
            },
            {
                path: '/profile/:userId',
                element: <Dashboard />,
            },
            {
                path: '/settings',
                element: <Dashboard />,
            },
            {
                path: '/questionary',
                element: <Dashboard />,
            },
        ],
    },
]);
export default router;

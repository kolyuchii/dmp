import {createBrowserRouter} from 'react-router-dom';
import ErrorPage from '@pages/error';
import App from './App.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [],
    },
]);
export default router;

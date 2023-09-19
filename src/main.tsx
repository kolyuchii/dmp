import ReactDOM from 'react-dom/client';
import './index.scss';
import router from './router.tsx';
import {RouterProvider} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />,
);

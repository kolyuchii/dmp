import {Outlet} from 'react-router-dom';
import HeaderComponent from '@components/header';
import AuthPage from '@pages/auth';
import {useStore} from '@nanostores/react';
import {$user} from '@stores/auth';

function App() {
    const user = useStore($user);

    if (user) {
        return (
            <div className="wrapper">
                <HeaderComponent />
                <Outlet />
            </div>
        );
    }
    return <AuthPage />;
}

export default App;

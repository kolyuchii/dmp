import './DashboardStyling.scss';
import {Link} from 'react-router-dom';

const DashboardPage = () => {
    return (
        <div>
            <h1>DASHBOARD</h1>
            <ul>
                <li>
                    <Link to={'/calls'}>Calls</Link>
                </li>
                <li>
                    <Link to={'/info'}>Information</Link>
                </li>
            </ul>

            <div>
                <h2>Notifications</h2>
                <ul>
                    <li>Notification 1</li>
                    <li>Notification 2</li>
                    <li>Notification 3</li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardPage;

import './CallsStyling.scss';
import {useStore} from '@nanostores/react';
import {fetchUsers, $users} from '@stores/users';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';

const CallsPage = () => {
    const users = useStore($users);
    useEffect(() => {
        fetchUsers();
    }, []);

    if (!users) return <h1>LOADING</h1>;

    return (
        <div>
            <h1>CALLS</h1>
            <ul>
                {Object.values(users).map((user) => {
                    return (
                        <li key={user.userId}>
                            <Link to={`/user/${user.userId}`}>
                                {user.userName}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CallsPage;

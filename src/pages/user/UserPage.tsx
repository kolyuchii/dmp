import './UserStyles.scss';
import {useParams} from 'react-router-dom';
import {getUserById} from '@stores/users.ts';

const UserPage = () => {
    const {userId} = useParams();
    const user = getUserById(userId);

    if (user) {
        return (
            <div>
                <h1>USER PAGE</h1>
                <h2>{userId}</h2>
            </div>
        );
    }

    return null;
};

export default UserPage;

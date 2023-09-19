import {deepMap} from 'nanostores';
import {UsersMap, User} from '../types.ts';

const users = [
    {
        userId: '1',
        userName: 'Ivan',
    },
];

export const $users = deepMap<UsersMap | null>(null);

export function fetchUsers() {
    $users.set(
        users.reduce((obj: UsersMap, user) => {
            obj[user.userId] = user;
            return obj;
        }, {}),
    );
}

export function getUserById(userId: string): User | null {
    const users = $users.get();

    if (users) {
        return users[userId];
    }
    return null;
}

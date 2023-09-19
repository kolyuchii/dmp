import {atom} from 'nanostores';
import {User} from '../types.ts';

export const $user = atom<User | null>({userId: '1'});

export function setUser(user: User) {
    $user.set(user);
}
export function removeUser() {
    $user.set(null);
}
